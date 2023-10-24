import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
// import { Product } from '../types/Product';

const api = supertest(app);

test('products are returned as json', async () => {
	await api
		.get('/api/products')
		.expect(200)
		.expect('Content-Type', /application\/json/);
}, 100000);

test('there are two 9 products', async () => {
	const response = await api.get('/api/products');

	expect(response.body).toHaveLength(9);
});

test('the first product name is Basilisk', async () => {
	const response = await api.get('/api/products');

	// const products = response.body as Product[];

	expect(response.body[0].name).toBe('Basilisk');
});

afterAll(async () => {
	await mongoose.connection.close();
});
