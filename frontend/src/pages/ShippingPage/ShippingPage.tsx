import * as Form from '@radix-ui/react-form';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { addShippingAddress } from '../../slices/cartSlice';
import { CartState, ShippingAddress } from '../../types/Product';

const ShippingPage = () => {
	const cart: CartState = useSelector(
		(state: RootState): CartState => state.cart
	);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress?.address || '');
	const [city, setCity] = useState(shippingAddress?.city || '');
	const [postalCode, setPostalCode] = useState(
		shippingAddress?.postalCode || ''
	);
	const [country, setCountry] = useState(shippingAddress?.country || '');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// console.log(cart)

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(addShippingAddress({ address, city, postalCode, country }));

		navigate('/payment');
	};

	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-bold text-center mt-5'>Shipping</h1>
			<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
				<Form.Field className='flex flex-col' name='address'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							Address
						</Form.Label>
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your Address
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
							Please provide a valid Address
						</Form.Message>
					</div>
					<Form.Control asChild>
						<input
							className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
							type='text'
							required
							placeholder='Enter Address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field className='flex flex-col' name='city'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							City
						</Form.Label>
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your city
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
							Please provide a valid city
						</Form.Message>
					</div>
					<Form.Control asChild>
						<input
							className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
							type='text'
							required
							placeholder='Enter City'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field className='flex flex-col' name='postalCode'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							Postal Code
						</Form.Label>
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your Postal Code
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
							Please provide a valid Postal Code
						</Form.Message>
					</div>
					<Form.Control asChild>
						<input
							className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
							type='text'
							required
							placeholder='Enter Postal Code'
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field className='flex flex-col' name='country'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							Country
						</Form.Label>
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your Country
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
							Please enter a valid Country
						</Form.Message>
					</div>
					<Form.Control asChild>
						<input
							className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
							type='text'
							placeholder='Enter Country'
							required
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</Form.Control>
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
export default ShippingPage;
