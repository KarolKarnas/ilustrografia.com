import asyncHandler from '../middleware/asyncHandler';
import ProductModel from '../models/productModel';
import { RequestUser } from '../types/User';
import {
	checkHaveUser,
	toCheckedProduct,
	toCheckedReview,
} from '../utils/typeUtils';
import { v4 as uuidv4 } from 'uuid';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (_req, res) => {
	const products = await ProductModel.find({});
	res.send(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:slug
// @access  Public
const getProductBySlug = asyncHandler(async (req, res) => {
	const product = await ProductModel.findOne({ slug: req.params.slug });
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error(`Product not found`);
	}
});

// @desc    Fetch products of category
// @route   GET /api/products/categories/:category
// @access  Public
const getProductsByCategory = asyncHandler(async (req, res) => {
	const products = await ProductModel.find({ categories: { $elemMatch: { slug: req.params.category } } });
	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error(`Products with category not found`);
	}
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
	const reqWithUser: RequestUser = checkHaveUser(req);
	const slug = uuidv4();
	const productSlug = `sample-slug-${slug}`;

	const product = new ProductModel({
		user: reqWithUser.user._id,
		details: {			latinName: "Samplus Productus",
		story: `The "Sample Product" is a unique and intriguing item that transports us to the heart of Warsaw, where stories of ancient legends and mysteries await. In this vibrant city, history and folklore intertwine, creating a captivating narrative filled with enchantment and wonder. It serves as a reminder that even the simplest of products can be a gateway to discovering the rich tapestry of a city's past and the allure of its untold stories. The "Sample Product" is more than an item; it's a key to unlocking the mysteries of a place and its history.`,
		occurrence: `Slav Lands`},
		name: `Sample Name ${slug}`,
		slug: productSlug,
		rating: {
			rating: 0,
			numReviews: 0,
		},
		categories: [
			{
				name: 'Sample Product',
				slug: 'sample-product',
			},
		],
		tags: [{ name: '', slug: '' }],
		images: ['/images/sample.jpg'],
		statistics: [
			'+50 sample',
			'+10 sample',
			'+25% sample',
			'sample sample sample',
		],
		options: {
			material: {
				optionName: 'Material',
				'art-print': {
					title: 'Art Print',
					images: ['/images/sample-art-print.jpg'],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: ['/images/sample-painting-on-canvas.jpg'],
				},
				poster: {
					title: 'Poster',
					images: ['/images/sample-poster.jpg'],
				},
				'premium-print': {
					title: 'Premium Print',
					images: ['/images/sample-premium-print.jpg'],
				},
			},
			size: {
				optionName: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		variations: [
			//ART-PRINT
			{
				productSlug: productSlug,
				options: { material: 'art-print', size: 's20x40' },
				SKU: 'sample-slug-art-print-s20x40',
				price: 109,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			//CANVAS
			{
				productSlug: productSlug,
				options: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: 'sample-slug-painting-on-canvas-s20x40',
				price: 209,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			// POSTER
			{
				productSlug: productSlug,
				options: { material: 'poster', size: 's20x30' },
				SKU: 'sample-product-poster-s20x30',
				price: 49,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			// PREMIUM PRINT
			{
				productSlug: productSlug,
				options: { material: 'premium-print', size: 's20x30' },
				SKU: 'sample-product-premium-print-s20x30',
				price: 59,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
		],
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
	const typedProduct = toCheckedProduct(req.body);
	const {
		details,
		name,
		slug,
		rating,
		categories,
		tags,
		images,
		options,
		variations,
		statistics,
		reviews
	} = typedProduct;

	const names = await ProductModel.find({ name });

	if (slug !== req.params.slug) {
		if (names.length !== 0) {
			res.status(400);
			throw new Error(
				`Product with the name ${name} already exists, provide unique name`
			);
		}
	}

	const product = await ProductModel.findOne({ slug: req.params.slug });
	if (product) {
		product.details= details,
		product.name = name;
		product.slug = slug;
		product.rating = rating;
		product.categories = categories;
		product.tags = tags;
		product.images = images;
		product.options = options;
		product.variations = variations;
		product.statistics = statistics;
		product.reviews = reviews;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Delete product
// @route   PUT /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await ProductModel.findOne({
		slug: req.params.slug,
	});
	if (product) {
		await ProductModel.deleteOne({ slug: product.slug });
		res.json(`${req.params.slug} product deleted successfully`);
	} else {
		res.status(404);
		throw new Error(`Product not found`);
	}
});

// @desc    Create a review
// @route   POST /api/products/:slug/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
	const reqUser = checkHaveUser(req);
	const typedBody = toCheckedReview(req.body);
	const { rating, comment } = typedBody;

	const product = await ProductModel.findOne({ slug: req.params.slug });

	if (product) {
		const review = {
			user: reqUser.user._id,
			name: reqUser.user.name,
			rating: Number(rating),
			comment,
		};

		product.reviews?.push(review);

		if (product.reviews) {
			product.rating.numReviews = product.reviews.length;

			product.rating.rating =
				product.reviews.reduce((acc, item) => item.rating + acc, 0) /
				product.reviews.length;
		}

		await product.save();
		return res.status(201).json({ message: 'Review added' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

export {
	getProducts,
	getProductBySlug,
	createProduct,
	updateProduct,
	deleteProduct,
	createProductReview,
	getProductsByCategory,
};
