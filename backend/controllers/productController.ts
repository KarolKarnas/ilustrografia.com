import asyncHandler from '../middleware/middleware';
import ProductModel from '../models/productModel';

const getProducts = asyncHandler(async (_req, res) => {
	const products = await ProductModel.find({});
	res.send(products);
});
const getProductBySlug = asyncHandler(async (req, res) => {
	const product = await ProductModel.findOne({ slug: req.params.slug });
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error(`Product not found`);
	}
});

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

export { getProducts, getProductBySlug, getVariantBySlugAndSku };
