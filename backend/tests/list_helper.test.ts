import listHelper from '../utils/list_helper';
import { products } from '../data/products';

test('dummy return 1', () => {
	const blogs = [1, 2, 3];
	const result = listHelper.dummy(blogs);
	expect(result).toBe(1);
});

describe('total reviews', () => {
	test('seed products have no reviews', () => {
		const result = listHelper.totalReviews(products);
		expect(result).toBe(0);
	});
});

describe('total rating', () => {
	test('seed products have total 50 hardcoded reviews in rating', () => {
		const result = listHelper.totalRatingNumReviews(products);
		expect(result).toBe(50);
	});

	test('seed products have total average rating greater than 4.5', () => {
		const result = listHelper.productsAverageRating(products);
		expect(result).toBeGreaterThan(4.5);
	});

	test('all seed products has total of 3 of equal highest rating products', () => {
		const result = listHelper.highestRatingProduct(products);
		expect(result.length).toBe(3);
	});
	test('array with one seed product has 1 highest rating product', () => {
		const oneProductArray = products.splice(0, 1);
		const result = listHelper.highestRatingProduct(oneProductArray);
		expect(result.length).toBe(1);
	});
});
