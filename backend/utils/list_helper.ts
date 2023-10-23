import { ProductNoId } from '../types/Product';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { products } from '../data/products';
// import _ from 'lodash';

const dummy = (blogs: number[]) => {
	console.log(blogs);
	return 1;
};

const totalReviews = (products: ProductNoId[]) => {
	if (products.length === 0) {
		return 0;
	} else {
		const result = products.reduce((acc, curr) => {
			return acc + (curr.reviews ? curr.reviews.length : 0);
		}, 0);

		return result;
	}
};

const totalRatingNumReviews = (products: ProductNoId[]) => {
	if (products.length === 0) {
		return 0;
	} else {
		const result = products.reduce((acc, curr) => {
			return acc + curr.rating.numReviews;
		}, 0);

		return result;
	}
};

const productsAverageRating = (products: ProductNoId[]) => {
	if (products.length === 0) {
		return 0;
	} else {
		const ratingSum = products.reduce((acc, curr) => {
			return acc + curr.rating.rating;
		}, 0);

		return ratingSum / products.length;
	}
};

const highestRatingProduct = (products: ProductNoId[]) => {
	if (products.length === 0) {
		return 'there is no favorite product here';
	}

	const {
		name,
		rating: { rating },
	} = products.reduce((prev, curr) => {
		return curr.rating.rating > prev.rating.rating ? curr : prev;
	});

	const favorites = products
		.filter((prod) => prod.rating.rating === rating)
		.map((prod) => prod.name);

	if (favorites.length === 1) {
		return [name];
	}

	return favorites;
};

// const mostCategory = (products: ProductNoId[]) => {
// 	if (products.length === 0) {
// 		return 'there is no favorite product here';
// 	}

// 	const grouped = _.groupBy(products, 'category[0].name');

// 	return grouped;
// };

// console.log(mostCategory(products));

export default {
	dummy,
	totalReviews,
	totalRatingNumReviews,
	productsAverageRating,
	highestRatingProduct,
};
