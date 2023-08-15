import { createSlice } from '@reduxjs/toolkit';
import { Product, VariationCart } from '../types/Product';

const cartData = localStorage.getItem('cart');
const initialState = cartData ? JSON.parse(cartData) : { cartItems: [] };

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {addToCart: (state, action) => {
    //variation and item?
    const item = action.payload;
    //by slug not_id
    // variation SKU
    const existItem = state.cartItems.find((currentItem: Product) => currentItem._id === item._id);

    if (existItem) {
      state.cartItems = state.cartItems.map((currentItem: Product) =>
        currentItem._id === existItem._id ? item : currentItem
      );
    } else {
      state.cartItems = [...state.cartItems, item];
    }

    state.itemsPrice = addDecimals(
      state.cartItems.reduce((acc: number, item: VariationCart) => acc + item.price * item.qty, 0)
    );

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

    state.taxPrice = addDecimals(
      Number((0.15 * state.itemsPrice).toFixed(2))
    );

    state.totalPrice = (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));
  },},
});

export default cartSlice.reducer;
