// import mongoose from 'mongoose';
import { ShippingAddress, VariationCart } from './Product';
import { UserOrder, UserInfoOptions } from './User';

//add sku
// interface OrderItems {
// 	name: string;
// 	qty: number;
// 	image: string;
// 	sku: string;
// 	price: number;
// 	product: mongoose.Types.ObjectId;
// }

// export interface ShippingAddress {
// 	address: string;
// 	city: string;
// 	postalCode: string;
// 	country: string;
// }

interface PaymentResult {
	id: string;
	status: string;
	update_time: string;
	email_address: string;
}

export interface Order {
	createdAt: string;
	isDelivered: boolean;
	isPaid: boolean;
	itemsPrice: number;
	orderItems: VariationCart[];
	paymentMethod: string;
	shippingAddress: ShippingAddress;
	shippingPrice: number;
	taxPrice: number;
	totalPrice: number;
	updatedAt: string;
	user: UserInfoOptions;
	__v: number;
	_id: string;
	// add ? question marks
	// paymentResult?: PaymentResult;
	paidAt?: string;
	deliveredAt?: string;
}

export interface OrderUser extends Omit<Order, 'user'> {
	user: string;
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
