import { VariationCart } from "./Product";
import { ShippingAddress } from "./Product";


export interface CartData {
  cartItems: VariationCart[],
  shippingAddress: ShippingAddress,
  paymentMethod: ''
}