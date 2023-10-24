import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import Product from '../models/productModel';
import Order from '../models/orderModel';
import User from '../models/userModel';
import { products } from '../data/products';
import users from '../data/users';
import { ProductUser } from '../types/Product';
import { password } from '../data/users';

const api = supertest(app);

beforeEach(async () => {
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
		console.log('Data Imported!');
	} catch (error) {
		console.error(`${error}`);
	}
});

test('products are returned as json', async () => {
	await api
		.get('/api/products')
		.expect(200)
		.expect('Content-Type', /application\/json/);
}, 100000);

test('All products are returned', async () => {
	const response = await api.get('/api/products');

	expect(response.body).toHaveLength(products.length);
});

test('the first product name is Basilisk', async () => {
	const response = await api.get('/api/products');

	expect(response.body[0].name).toBe('Basilisk');
});

test('A specific product name is within the returned products', async () => {
	const response = await api.get('/api/products');
	const typedResponse = response.body as ProductUser[];
	const names = typedResponse.map((product) => product.name);

	expect(names).toContain('Forest Bobo');
});

test.only('A user can login with correct email and password', async () => {
	const response = await api
		.post('/api/users/auth')
		.send({ email: users[0].email, password: password })
		.expect(200);

	console.log(response.body);

	expect(response.body).toHaveProperty('_id');
	expect(response.body).toHaveProperty('name');
	expect(response.body).toHaveProperty('email');
	expect(response.body).toHaveProperty('isAdmin');
});

afterAll(async () => {
	await mongoose.connection.close();
});
