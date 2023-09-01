import asyncHandler from '../middleware/asyncHandler';
import ProductModel from '../models/productModel';
import { RequestUser } from '../types/User';
import { checkHaveUser, toCheckedProduct } from '../utils/typeUtils';
import { v4 as uuidv4 } from 'uuid';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (_req, res) => {
	const products = await ProductModel.find({});
	res.send(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
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

//not used
const getVariantBySlugAndSku = asyncHandler(async (req, res) => {
	const product = await ProductModel.findOne(
		{ slug: req.params.slug, 'variations.SKU': req.params.sku },
		{ 'variations.$': 1 }
	);
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'Product Not Found' });
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
		name: `Sample Name ${slug}`,
		slug: productSlug,
		rating: {
			rating: 0,
			numReviews: 0,
		},
		categories: [
			{
				name: 'Nowosłowiański Spis Powszechny',
				slug: 'nowoslowianski-spis-powszechny',
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
					images: ['/images/sample.jpg'],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: ['/images/sample.jpg'],
				},
				poster: {
					title: 'Poster',
					images: ['/images/sample.jpg'],
				},
				'premium-print': {
					title: 'Premium Print',
					images: ['/images/sample.jpg'],
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
		name,
		slug,
		rating,
		categories,
		tags,
		images,
		options,
		variations,
		statistics,
	} = typedProduct;

	const names = await ProductModel.find({ name });

	if (names.length !== 0) {
		res.status(400);
		throw new Error(
			`Product with the name ${name} already exists, provide unique name`
		);
	}

	// if (slug !== req.params.slug) {
	// 	const slugs = await ProductModel.find({ slug });
	// 	if (slugs.length !== 0) {
	// 		res.status(400);
	// 		throw new Error(
	// 			`Product with the slug ${slug} already exists, provide unique slug`
	// 		);
	// 	}
	// }

	const product = await ProductModel.findOne({ slug: req.params.slug });

	if (product) {
		product.name = name;
		product.slug = slug;
		product.rating = rating;
		product.categories = categories;
		product.tags = tags;
		product.images = images;
		product.options = options;
		product.variations = variations;
		product.statistics = statistics;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// // @desc    Create a product
// // @route   POST /api/products/:id
// // @access  Private/Admin

// const createVariation = asyncHandler(async (req, res) => {
// 	const product = await ProductModel.findOne({ slug: req.params.slug });
// 	if (product) {
// 		res.json(product);
// 	} else {
// 		res.status(404);
// 		throw new Error(`Product not found`);
// 	}
// });

export {
	getProducts,
	getProductBySlug,
	getVariantBySlugAndSku,
	createProduct,
	updateProduct,
};
