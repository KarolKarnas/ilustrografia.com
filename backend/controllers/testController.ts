//Cypress
import asyncHandler from '../middleware/asyncHandler';
import Product from '../models/productModel';
import Order from '../models/orderModel';
import User from '../models/userModel';
import { products } from '../data/products';
import users from '../data/users';

// @desc    Reset database
// @route   post /api/testing/reset
// @access  Public
const resetDatabase = asyncHandler(async (_req, res) => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);
		res.status(201).json('Database has been reset!');
	} catch (error) {
		console.error(`${error}`);
	}
});

export { resetDatabase };
