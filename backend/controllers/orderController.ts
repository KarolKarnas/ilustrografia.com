// import { Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import OrderModel from '../models/orderModel';
import { Order, OrderData, OrderUpdateReq } from '../types/Order';
import {
	checkHaveUser,
	toCheckOrderData,
	toReqOrderUpdate,
} from '../utils/typeUtils';
import { RequestUser } from '../types/User';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
	await OrderModel.find({});

	const reqWithUser: RequestUser = checkHaveUser(req);
	// console.log(reqWithUser.user);

	const checkedOrder: OrderData = toCheckOrderData(req.body);
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = checkedOrder;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
	} else {
		const order = new OrderModel({
			orderItems: orderItems.map((x) => ({
				...x,
				product: x._id,
				_id: undefined,
			})),
			//here user
			user: reqWithUser.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
	const reqWithUser: RequestUser = checkHaveUser(req);
	const orders = await OrderModel.find({ user: reqWithUser.user._id }).populate(
		'user',
		'name email'
	);
	res.json(orders);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
	const order = await OrderModel.findById(req.params.id).populate(
		'user',
		'name email'
	);

	if (order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
	const order = await OrderModel.findById(req.params.id);
	// const reqOrderUpdate = req.body as OrderUpdateReq
	const reqOrderUpdate: OrderUpdateReq = toReqOrderUpdate(req.body);

	if (order) {
		order.isPaid = true;
		order.paidAt = Date.now();
		order.paymentResult = {
			id: reqOrderUpdate.id,
			status: reqOrderUpdate.status,
			update_time: reqOrderUpdate.update_time,
			email_address: reqOrderUpdate.payer.email_address,
		};

		const updatedOrder = await order.save();
		// console.log(updatedOrder)
		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
	const order = await OrderModel.findById(req.params.id);
	if (order) {
		order.isDelivered = true;
		order.deliveredAt = Date.now();
		const updatedOrder = await order.save();
		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
});

// @desc    Get all orders
// @route   GET /api/orders/
// @access  Private/Admin
const getOrders = asyncHandler(async (_req, res) => {
	const orders: Order[] = await OrderModel.find({}).populate('user', 'id name');
	res.send(orders);
});

export {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
};