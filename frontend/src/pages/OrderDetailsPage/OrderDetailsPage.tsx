import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	usePayPalScriptReducer,
	SCRIPT_LOADING_STATE,
} from '@paypal/react-paypal-js';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import {
	useGetOrderDetailsQuery,
	usePayOrderMutation,
	useGetPaypalClientIdQuery,
} from '../../slices/ordersApiSlice';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { toCheckOrder } from '../../utils/typeCheck';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';

const OrderDetailsPage = () => {
	const [order, setOrder] = useState<Order>();
	const { id: orderId } = useParams();

	const { data, refetch, error, isLoading } = useGetOrderDetailsQuery(orderId);

	const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

	const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

	const {
		data: paypal,
		isLoading: loadingPayPal,
		error: errorPayPal,
	} = useGetPaypalClientIdQuery({});

// console.log(paypal);

	const { userInfo } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (!isLoading) {
			const order = toCheckOrder(data);
			setOrder(order);
		}
	}, [isLoading]);

	// console.log(order);

	useEffect(() => {
		if (!errorPayPal && !loadingPayPal && paypal.clientId) {
			const loadPaypalScript = async () => {
				paypalDispatch({
					type: 'resetOptions',
					value: {
						clientId: paypal.clientId,
						currency: 'USD',
					},
				});
				paypalDispatch({
					type: 'setLoadingStatus',
					value: SCRIPT_LOADING_STATE.PENDING,
				});
			};
			if (order && !order.isPaid) {
				if (!window.paypal) {
					loadPaypalScript();
				}
			}
		}
	}, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

	async function onApproveTest() {
		await payOrder({
			orderId,
			details: {
				id: 'helloId',
				status: 'statusss',
				update_time: 'time is good',
				payer: { email_address: 'test@tes.com' },
			},
		});
		refetch().then((value) => setOrder(toCheckOrder(value.data)));

		toast.success('Order is paid');
	}



	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<div>{getError(error as ApiError)}</div>;
	}
	if (!order) {
		return <div>No Order</div>;
	}

	const paypalButtonTransactionProps: PayPalButtonsComponentProps = {
		style: { layout: 'vertical' },

		createOrder(data, actions) {
			return actions.order
				.create({
					purchase_units: [
						{
							amount: { value: order.totalPrice.toString() },
						},
					],
				})
				.then((orderID: string) => {
					return orderID;
				});
		},
		onApprove(data, actions) {
			return actions.order!.capture().then(async function (details) {
				try {
					await payOrder({ orderId, details });
					refetch().then((value) => setOrder(toCheckOrder(value.data)));
					toast.success('Order is paid');
				} catch (err) {
					toast.error(getError(err as ApiError));
				}
			});
		},
		onError(err) {
			toast.error(getError(err as ApiError));
		},
	};
	return (
		<div className='flex flex-col items-center w-full mt-4'>
			

			<div className='flex w-8/12 gap-20'>
				{/* col 1 */}
				<div className=' w-3/4'>
					<section className='mb-7'>
						<h1 className='text-4xl font-bold text-center my-5 text-zinc-300'>
							Order {order._id}
						</h1>
						<h2 className='text-4xl text-zinc-400'>Shipping</h2>
						<p className='py-2'>
							<strong>Name: </strong> {order.user.name}
						</p>
						<p className='py-2'>
							<strong>Email: </strong>{' '}
							<a
								className='text-red-400 hover:text-zinc-500'
								href={`mailto:${order.user.email}`}
							>
								{order.user.email}
							</a>
						</p>
						<p className='py-2'>
							<strong>Address: </strong> {order.shippingAddress?.address},{' '}
							{order.shippingAddress?.city} {order.shippingAddress?.postalCode},{' '}
							{order.shippingAddress?.country}
						</p>
						<Message
							variant={order.isDelivered ? 'good' : 'bad'}
							message={
								order.isDelivered
									? 'Your order has been delivered'
									: 'Have not been delivered yet'
							}
						/>
						<hr className=' h-px mx-auto my-3'></hr>
					</section>

					<section className='mb-7'>
						<h2 className='text-4xl text-zinc-400'>Payment Method</h2>
						<p className='py-2'>
							<strong>Method: </strong> {order.paymentMethod}
						</p>
						<Message
							variant={order.isPaid ? 'good' : 'bad'}
							message={
								order.isPaid
									? 'Your order has been paid'
									: 'Have not been paid yet'
							}
						/>
						<hr className=' h-px mx-auto my-3'></hr>
					</section>

					<section>
						<h2 className='text-4xl text-zinc-400'>Ordered Items</h2>
						<div className='mt-4'>
							{order.orderItems.map((variation, index) => (
								<div key={index}>
									<div className='flex items-center justify-between mb-4'>
										<img
											className='basis-1/12 w-10'
											src={variation.image}
											alt={variation.variationName}
										/>
										<Link
											className='basis-6/12 text-center underline hover:text-red-300'
											to={variation.pathnameWithQuery}
										>
											{' '}
											<div>{variation.variationName}</div>{' '}
										</Link>

										<div className='basis-2/12'>
											{variation.qty} x {variation.price}zł ={' '}
											{variation.price * variation.qty}zł
										</div>
									</div>
									<hr className=' h-px mx-auto my-3 w-10/12'></hr>
								</div>
							))}
						</div>
					</section>
				</div>
				{/* col 2  */}
				<div className='flex flex-col items-center justify-around w-1/4  bg-white shadow-2xl p-2'>
					<div>
						<h3 className='text-3xl font-bold text-center mt-5'>
							Order Summary
						</h3>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Items</div>
							<div>{order.itemsPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Shipping</div>
							<div>{order.shippingPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Tax</div>
							<div>{order.taxPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div className='text-lg'>
								<strong>Total</strong>
							</div>
							<div className='text-lg'>
								<strong>{order.totalPrice}zł</strong>
							</div>
						</div>
						{!order.isPaid && (
							<div>
								{loadingPay && <div>Loading...</div>}
								{isPending ? (
									<div>Loading...</div>
								) : (
									<div>
										{/* <button
											className=' bg-slate-600 hover:bg-red-400'
											onClick={onApproveTest}
										>
											Test Pay order
										</button> */}
										<div>
											<PayPalButtons {...paypalButtonTransactionProps }></PayPalButtons>
										</div>
									</div>
								)}
							</div>
						)}
						<div className='flex justify-between w-full py-2'>
							{error && <div>{getError(error as ApiError)}</div>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderDetailsPage;
