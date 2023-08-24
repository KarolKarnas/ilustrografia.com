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

	const [createOrder, { isLoading, error }] = useCreateOrderMutation();
	const dispatch = useDispatch();

	const placeOrderHandler = async () => {
		try {
			console.log({orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice})
			const res = await createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			}).unwrap();
			console.log(res)
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
		<div>
			<button
				type='button'
				disabled={cart.cartItems.length === 0}
				onClick={placeOrderHandler}
			>
				Place Order
			</button>
		</div>
	);
};
export default PlaceOrderPage;
