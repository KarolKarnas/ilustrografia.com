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
import { UserId } from '../types/User';

const api = supertest(app);

let jwtToken = '';

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
		jwtToken = jwtCookie.split('=')[1].split(';')[0];
		//

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);
		console.log('Data Imported!');
	} catch (error) {
		console.error(`${error}`);
	}
});

test('admin can fetch all users', async () => {
	const responseUsers = await api
		.get('/api/users')
		.set('Cookie', `jwt=${jwtToken}`);

	expect(users.length).toBe(responseUsers.body.length);
});

test('new user can be created, when: email, name, password provided', async () => {
	const newUserName = 'tester';

	await api.post('/api/users').send({
		name: newUserName,
		email: 'tester@email.com',
		password: 'iLoveTesting',
	});
	
	const responseGetUsers = await api
		.get('/api/users')
		.set('Cookie', `jwt=${jwtToken}`);

	const currentUsers = responseGetUsers.body as UserId[];

	expect(users.length + 1).toBe(currentUsers.length);
	expect(currentUsers[currentUsers.length - 1].name).toContain(newUserName);
});

test('admin can delete user', async () => {
	const responseGetUsers = await api
		.get('/api/users')
		.set('Cookie', `jwt=${jwtToken}`);

	const id = responseGetUsers.body[1]._id as string;

	await api.delete(`/api/users/${id}`).set('Cookie', `jwt=${jwtToken}`);

	const responseCurrentUsers = await api
		.get('/api/users')
		.set('Cookie', `jwt=${jwtToken}`);

	expect(users.length - 1).toBe(responseCurrentUsers.body.length);
});

afterAll(async () => {
	await mongoose.connection.close();
});
