import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../slices/reduxHooks';
import { FaTrash } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../../slices/cartSlice';
import { VariationCart } from '../../types/Product';

const CartPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((state) => state.cart);

	const checkoutHandler = () => {
		navigate('/login?redirect=/shipping');
	};

	const addToCartHandler = async (variation: VariationCart, qty: number) => {
		dispatch(addToCart({ ...variation, qty }));
	};
	const removeFromCartHandler = async (id: string) => {
		dispatch(removeFromCart(id));
	};
	return (
		<div className='flex w-full flex-col justify-center items-center'>
			<h1>Shopping Cart</h1>

			{cartItems.length === 0 ? (
				<div>
					Your cart is empty{' '}
					<Link to='/'>
						<button className='bg-zinc-900 text-white hover:bg-red-200 px-32 py-1  my-2'>
							Go Back
						</button>
					</Link>
				</div>
			) : (
				<div className=' w-8/12'>
					<div>
						<div className='flex items-center justify-between mb-4 bg-slate-100 py-3'>
							<div className='basis-1/12 font-bold '>Remove</div>
							<div className='basis-1/12 w-10 text-center font-bold'>Image</div>
							<div className='basis-6/12 text-center font-bold'>Link</div>
							<div className='basis-2/12 font-bold'>Price</div>
							<div className='basis-2/12 font-bold'>Qty</div>
							<div className='basis-2/12 font-bold'>Total</div>
						</div>
						<hr className=' h-px mx-auto my-3'></hr>
					</div>
					{cartItems.map((variation) => (
						<div key={variation._id}>
							<div className='flex items-center justify-between mb-4'>
								<FaTrash
									onClick={() => removeFromCartHandler(variation._id)}
									className='basis-1/12 hover:cursor-pointer hover:text-red-300'
								/>
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
								<div className='basis-2/12'>${variation.price}</div>
								<div className='basis-2/12'>
									<select
										className='bg-red-50'
										value={variation.qty}
										onChange={(e) =>
											addToCartHandler(variation, Number(e.target.value))
										}
									>
										{Array.from(
											{ length: variation.countInStock },
											(_, index) => (
												<option
													className='bg-red-50'
													key={index + 1}
													value={index + 1}
												>
													{index + 1}
												</option>
											)
										)}
									</select>
								</div>
								<div className='basis-2/12'>
									${variation.price * variation.qty}
								</div>
							</div>
							<hr className=' h-px mx-auto my-3'></hr>
						</div>
					))}
				</div>
			)}

			<div className='flex gap-20'>
				<div className=' basis-1/2'>
					<img src='/images/shop/cart-1.jpg' alt='' />
				</div>
				<div className=' basis-1/2'>
					<h1 className='text-3xl'>Cart summary</h1>
					<div>
						Total cart items:{' '}
						{cartItems.reduce((acc, variant) => acc + variant.qty, 0)}
					</div>
					<div>
						You will own me just{' '}
						<strong>
							{cartItems
								.reduce((acc, variant) => acc + variant.qty * variant.price, 0)
								.toFixed(2)}
						</strong>{' '}
						Dollars, thanks
					</div>

					<button
						disabled={cartItems.length === 0}
						onClick={checkoutHandler}
						className='bg-zinc-900 text-white hover:bg-red-200 px-32 py-1  my-2'
					>
						Proceed To Checkout
					</button>
				</div>
			</div>
		</div>
	);
};
export default CartPage;
