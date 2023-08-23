import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

import { addPaymentMethod } from '../../slices/cartSlice';
import { CartState } from '../../types/Product';
import CheckoutSteps from '../../components/CheckoutSteps';

const PaymentPage = () => {
	const cart: CartState = useSelector(
		(state: RootState): CartState => state.cart
	);
	const { shippingAddress } = cart;
	const currentPaymentMethod = cart.paymentMethod;

	//set cuurent payment
	const [paymentMethod, setPaymentMethod] = useState(
		currentPaymentMethod || 'PayPal'
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		//redirect if no shipping address
		if (shippingAddress && Object.keys(shippingAddress).length === 0) {
			navigate('/shipping');
		}
	}, [shippingAddress, navigate]);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(addPaymentMethod(paymentMethod));
		navigate('/place-order');
	};

	return (
		<div className='flex flex-col items-center w-full'>
			<CheckoutSteps step1={true} step2={true} step3={true} step4={false} />
			<h1 className='text-3xl font-bold text-center mt-5'>Payment Method</h1>
			<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
				<Form.Field className='flex flex-col' name='address'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							Methods
						</Form.Label>
					</div>

					<RadioGroup.Root
						className='flex flex-col gap-4'
						defaultValue={paymentMethod}
						aria-label='payment-method'
					>
						<div className='flex items-center'>
							<RadioGroup.Item
								className='w-6 h-6 rounded-full shadow-red-500 shadow-lg'
								value='PayPal'
								id='r1'
								onClick={(e) => setPaymentMethod(e.currentTarget.value)}
							>
								<RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-2 after:h-2 after:rounded-lg after:bg-red-300' />
							</RadioGroup.Item>
							<label
								className=' text-slate-800 pl-4 text-md leading-4'
								htmlFor='r1'
							>
								PayPal or Credit Card
							</label>
						</div>
						<div className='flex items-center'>
							<RadioGroup.Item
								disabled
								className='w-6 h-6 rounded-full shadow-red-500 shadow-lg disabled:bg-slate-300 disabled:shadow-none'
								value='przelewy24'
								id='r2'
								onClick={(e) => setPaymentMethod(e.currentTarget.value)}
							>
								<RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-2 after:h-2 after:rounded-lg after:bg-red-300' />
							</RadioGroup.Item>
							<label
								className=' text-slate-800 pl-4 text-md leading-4'
								htmlFor='r2'
							>
								Przelewy24
							</label>
						</div>
						<div className='flex items-center'>
							<RadioGroup.Item
								disabled
								className='w-6 h-6 rounded-full shadow-red-500 shadow-xl disabled:bg-slate-300 disabled:shadow-none'
								value='cash'
								id='r3'
								onClick={(e) => setPaymentMethod(e.currentTarget.value)}
							>
								<RadioGroup.Indicator className='flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-2 after:h-2 after:rounded-lg after:bg-red-300' />
							</RadioGroup.Item>
							<label
								className=' text-slate-800 pl-4 text-md leading-4 '
								htmlFor='r3'
							>
								Cash
							</label>
						</div>
					</RadioGroup.Root>
				</Form.Field>
				<Form.Submit asChild>
					<button className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'>
						Continue
					</button>
				</Form.Submit>
			</Form.Root>
		</div>
	);
};
export default PaymentPage;
