import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VariationCart, ShippingAddress } from "../types/Product";
import { updateCart } from "../utils/cartUtils";
import { CartState } from "../types/Product";

const cartData = localStorage.getItem("cart");
const initialState: CartState = cartData
  ? JSON.parse(cartData)
  : { cartItems: [], shippingAddress: {}, paymentMethod: "" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<VariationCart>) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentItem: VariationCart) => currentItem._id === item._id,
      );

      if (existItem) {
        if (existItem.qty === item.qty) {
          throw new Error(
            `${item.variationName} x ${item.qty} already in the cart.`,
          );
        }
        state.cartItems = state.cartItems.map((currentItem: VariationCart) =>
          currentItem._id === existItem._id ? item : currentItem,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item: VariationCart) => item._id !== action.payload,
      );

      return updateCart(state);
    },
    addShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    addPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    resetCart: (state) => {
      state.cartItems = initialState.cartItems;
      state.shippingAddress = initialState.shippingAddress;
      state.paymentMethod = initialState.paymentMethod;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addShippingAddress,
  addPaymentMethod,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
