import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { CartState } from '../../types/Product';
import { RootState } from '../../store';
import { addToCart } from '../../slices/cartSlice';
import { VariationCart } from '../../types/Product';

const CartPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState): CartState => state.cart);
	const { cartItems } = cart;
	console.log(cartItems);

	const addToCartHandler = async (variation: VariationCart, qty: number) => {
		dispatch(addToCart({ ...variation, qty }));
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
					{cartItems.map((variation) => (
						<>
							<div
								className='flex items-center justify-between mb-4'
								key={variation._id}
							>
								<FaTrash className='basis-1/12 hover:cursor-pointer hover:text-red-300' />
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
								<div className='basis-2/12'>{variation.price}zł</div>
								<div className='basis-2/12'>
									<select
										className='bg-red-50'
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
									{variation.price * variation.qty}zł
								</div>
							</div>
							<hr className=' h-px mx-auto my-3'></hr>
						</>
					))}
				</div>
			)}

			<div className='flex'>
				<div className=' basis-1/2'>

					<img src="/images/shop/cart-1.jpg" alt="" />
				</div>
				<div className=' basis-1/2'>
					<h1 className='text-3xl'>Cart summary</h1>
				</div>
			</div>
		</div>
	);
};
export default CartPage;
