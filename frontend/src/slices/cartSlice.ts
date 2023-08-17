import { createSlice } from '@reduxjs/toolkit';
import { Product, VariationCart } from '../types/Product';
import { updateCart } from '../utils/cartUtils';

const cartData = localStorage.getItem('cart');
const initialState = cartData ? JSON.parse(cartData) : { cartItems: [] };

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
				(item: VariationCart) => item._id === item._id
			);

			if (existItem) {
				state.cartItems = state.cartItems.map((item: VariationCart) =>
					item._id === existItem._id ? item : item
				);
			} else {
				state.cartItems = [...state.cartItems, item];
			}

			return updateCart(state);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item: VariationCart) => item._id !== action.payload)

			return updateCart(state)
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
