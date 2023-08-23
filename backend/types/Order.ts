import mongoose from 'mongoose';
import { VariationCart } from './Product';

//add sku
// interface OrderItems {
// 	name: string;
// 	qty: number;
// 	image: string;
// 	sku: string;
// 	price: number;
// 	product: mongoose.Types.ObjectId;
// }

export interface ShippingAddress {
	address: string;
	city: string;
	postalCode: string;
	country: string;
}

// interface PaymentResult {
// 	id: string;
// 	status: string;
// 	update_time: string;
// 	email_address: string;
// }

export interface Order {
	user: mongoose.Types.ObjectId;
	orderItems: VariationCart[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	// paymentResult: PaymentResult;
	itemsPrice: number;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
  // add ? question marks
	// paidAt?: Date;
	isDelivered: boolean;
	// deliveredAt?: Date;
}
