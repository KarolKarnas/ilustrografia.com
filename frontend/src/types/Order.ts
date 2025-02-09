
import { ShippingAddress, VariationCart } from './Product';
import { UserInfoOptions } from './User';


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
