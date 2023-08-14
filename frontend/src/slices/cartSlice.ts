import { createSlice } from '@reduxjs/toolkit';

const cartData = localStorage.getItem('cart');
const initialState = cartData ? JSON.parse(cartData) : { cartItems: [] };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
});

export default cartSlice.reducer;
