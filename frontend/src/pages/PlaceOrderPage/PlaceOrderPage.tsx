import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../../components/CheckoutSteps';
import { useCreateOrderMutation } from '../../slices/ordersApiSlice';
import { clearCartItems } from '../../slices/cartSlice';
import { RootState } from '../../store';
import { CartState } from '../../types/Product';

const PlaceOrderPage = () => {
	const navigate = useNavigate();

	const cart: CartState = useSelector(
		(state: RootState): CartState => state.cart
	);

	console.log(cart);

	const [createOrder, { isLoading, error }] = useCreateOrderMutation();
	const dispatch = useDispatch();

	const placeOrderHandler = async () => {
		try {
			// console.log({
			// 	orderItems: cart.cartItems,
			// 	shippingAddress: cart.shippingAddress,
			// 	paymentMethod: cart.paymentMethod,
			// 	itemsPrice: cart.itemsPrice,
			// 	shippingPrice: cart.shippingPrice,
			// 	taxPrice: cart.taxPrice,
			// 	totalPrice: cart.totalPrice,
			// });
			const res = await createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			}).unwrap();
			// console.log(res);
			dispatch(clearCartItems({}));
			navigate(`/order/${res._id}`);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!cart.shippingAddress?.address) {
			navigate('/shipping');
		} else if (!cart.paymentMethod) {
			navigate('/payment');
		}
	}, [cart.paymentMethod, cart.shippingAddress?.address, navigate]);

	return (
		<div className='flex flex-col items-center w-full'>
			<CheckoutSteps step1={true} step2={true} step3={true} step4={true} />
			<h1 className='text-3xl font-bold text-center mt-5'>Place Order</h1>
			<div className='flex w-8/12 gap-20'>
				<div className=' w-3/4'>
					<h2 className='text-4xl'>Shipping Address</h2>
					<p className='py-2'>
						<strong>Address: </strong> {cart.shippingAddress?.address},{' '}
						{cart.shippingAddress?.city} {cart.shippingAddress?.postalCode},{' '}
						{cart.shippingAddress?.country}
					</p>
					<hr className=' h-px mx-auto my-3'></hr>
					<h2 className='text-4xl'>Payment Method</h2>
					<p className='py-2'>
						<strong>Method: </strong>
						{cart.paymentMethod}
					</p>
					<hr className=' h-px mx-auto my-3'></hr>
					<h2 className='text-4xl'>Order Items</h2>

					<div className='py-2'>
						{cart.cartItems.length === 0 ? (
							<div>
								Your cart is empty{' '}
								<Link to='/'>
									<button className='bg-zinc-900 text-white hover:bg-red-200 px-32 py-1 my-2'>
										Go Back
									</button>
								</Link>
							</div>
						) : (
							<div>
								{cart.cartItems.map((variation, index) => (
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
												{variation.price}zł * {variation.qty} ={' '}
												{variation.price * variation.qty}zł
											</div>
										</div>
										<hr className=' h-px mx-auto my-3'></hr>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='flex flex-col items-center justify-around w-1/4  bg-white shadow-2xl p-2'>
					<div>
					<h3 className='text-3xl font-bold text-center mt-5'>Order Summary</h3>
					<div className='flex justify-between border-b w-full py-2'>
						<div>Items</div>
						<div>{cart.itemsPrice}zł</div>
					</div>
					<div className='flex justify-between border-b w-full py-2'>
						<div>Shipping</div>
						<div>{cart.shippingPrice}zł</div>
					</div>
					<div className='flex justify-between border-b w-full py-2'>
						<div>Tax</div>
						<div>{cart.taxPrice}zł</div>
					</div>
					<div className='flex justify-between border-b w-full py-2'>
						<div className='text-lg'><strong>Total</strong></div>
						<div className='text-lg'><strong>{cart.totalPrice}zł</strong></div>
					</div>
					</div>
					<button
						type='button'
						className={`${
							cart.cartItems.length === 0
								? 'bg-zinc-100 text-zinc-300'
								: 'bg-zinc-900 text-white hover:bg-red-200'
						}   px-32 py-1  my-2`}
						disabled={cart.cartItems.length === 0}
						onClick={placeOrderHandler}
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};
export default PlaceOrderPage;
