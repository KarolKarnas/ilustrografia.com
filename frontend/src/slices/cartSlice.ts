import { createSlice } from '@reduxjs/toolkit';
import { VariationCart } from '../types/Product';
import { updateCart } from '../utils/cartUtils';

const cartData = localStorage.getItem('cart');
const initialState = cartData
	? JSON.parse(cartData)
	: { cartItems: [], shippingAddress: {}, paymentMethod: '' };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			//variation and item?
			const item = action.payload;
			//by slug not_id ?
			// variation SKU
			const existItem = state.cartItems.find(
				(currentItem: VariationCart) => currentItem._id === item._id
			);

			if (existItem) {
				state.cartItems = state.cartItems.map((currentItem: VariationCart) =>
					currentItem._id === existItem._id ? item : currentItem
				);
			} else {
				state.cartItems = [...state.cartItems, item];
			}

			return updateCart(state);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item: VariationCart) => item._id !== action.payload
			);

			return updateCart(state);
		},
		addShippingAddress: (state, action) => {
			state.shippingAddress = action.payload
			return updateCart(state)
		},
		addPaymentMethod: (state, action) => {
			state.paymentMethod = action.payload
			return updateCart(state)
		},
		clearCartItems: (state, action) => {
			state.cartItems = []
			localStorage.setItem('cart', JSON.stringify(state))
		},
	},
});

export const { addToCart, removeFromCart, addShippingAddress,addPaymentMethod, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
