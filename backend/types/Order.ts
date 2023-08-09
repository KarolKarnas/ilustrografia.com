import { Types } from 'mongoose';

//add sku
interface OrderItems {
	name: string;
	qty: number;
	image: string;
	sku: string;
	price: number;
	product: Types.ObjectId;
}

interface ShippingAddress {
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
	user: Types.ObjectId;
	orderItems: OrderItems[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	paymentResult: PaymentResult;
	itemsPrice: number;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
  // add ? question marks
	paidAt?: Date;
	isDelivered: boolean;
	deliveredAt?: Date;
}
