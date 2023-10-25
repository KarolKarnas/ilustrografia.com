import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import Product from '../models/productModel';
import Order from '../models/orderModel';
import User from '../models/userModel';
import { products } from '../data/products';
import users from '../data/users';
// import { ProductUser } from '../types/Product';
import { password } from '../data/users';
// import { OrderData } from '../types/Order';
import { VariationCart } from '../types/Product';
import { OrderData } from '../types/Order';
// import { UserId } from '../types/User';

const api = supertest(app);

let jwtAdminToken = '';
let jwtUserToken = '';

beforeEach(async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		// admin login
		const responseAuth = await api
			.post('/api/users/auth')
			.send({ email: users[0].email, password: password });
		const jwtCookie = responseAuth.headers['set-cookie'][0] as string;
		jwtAdminToken = jwtCookie.split('=')[1].split(';')[0];

		// not Admin user Login
		const responseUserAuth = await api
			.post('/api/users/auth')
			.send({ email: users[1].email, password: password });
		const jwtUserCookie = responseUserAuth.headers['set-cookie'][0] as string;
		jwtUserToken = jwtUserCookie.split('=')[1].split(';')[0];
		//

		console.log(jwtAdminToken);
		console.log(jwtUserToken);

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);
		console.log('Data Imported!');
	} catch (error) {
		console.error(`${error}`);
	}
});

test('user can make an order', async () => {
	const responseOrdersBefore = await api
		.get('/api/orders')
		.set('Cookie', `jwt=${jwtAdminToken}`);

	const responseProducts = await api.get('/api/products');

	const variation = responseProducts.body[0].variations[0] as VariationCart;

	variation.qty = 10;
	variation.image = 'test.jpg';
	variation.variationName = `variation-test-name`;
	variation.pathnameWithQuery = 'someTest/path';

	const order: OrderData = {
		orderItems: [variation],
		shippingAddress: {
			address: 'Old-town 37',
			city: 'New York',
			postalCode: '222',
			country: 'USA',
		},
		paymentMethod: 'Pay Pal',
		itemsPrice: 11111,
		taxPrice: 2222,
		shippingPrice: 333,
		totalPrice: 11,
	};

await api
		.post('/api/orders')
		.set('Cookie', `jwt=${jwtUserToken}`)
		.send(order);

	const responseOrdersAfter = await api
		.get('/api/orders')
		.set('Cookie', `jwt=${jwtAdminToken}`);

	expect(responseOrdersBefore.body.length + 1).toBe(
		responseOrdersAfter.body.length
	);
});

afterAll(async () => {
	await mongoose.connection.close();
});
