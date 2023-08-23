import asyncHandler from '../middleware/asyncHandler';
import OrderModel from '../models/orderModel';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('add order items');
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('get my orders');
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('get order by id');
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('update order to paid');
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('update order to delivered');
});

// @desc    Get all orders
// @route   GET /api/orders/
// @access  Private/Admin
const getOrders = asyncHandler(async (_req, res) => {
	await OrderModel.find({});
	res.send('admin get all orders');
});

export {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
};
