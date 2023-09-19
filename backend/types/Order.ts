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

interface PaymentResult {
	id: string;
	status: string;
	update_time: string;
	email_address: string;
}

export interface Order {
	user: mongoose.Types.ObjectId;
	orderItems: VariationCart[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	paymentResult?: PaymentResult;
	itemsPrice: number;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
	// add ? question marks
	paidAt?: number; // not Date
	isDelivered: boolean;
	deliveredAt?: number;
}
export interface OrderData {
	orderItems: VariationCart[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	itemsPrice: number;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
}

export interface OrderUpdateReq {
	id: string;
	status: string;
	update_time: string;
	payer: { email_address: string };
}
