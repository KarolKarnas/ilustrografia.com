import express from 'express';
// import productService from '../services/productService';
import ProductModel from '../models/productModel';
import asyncHandler from '../middleware/middleware';

const productRouter = express.Router();

productRouter.get('/', asyncHandler(async (_req, res) => {
	const products = await ProductModel.find({});
	res.send(products);
}));

productRouter.get('/:slug',asyncHandler(async (req, res) => {
	const product = await ProductModel.findOne({slug: req.params.slug});
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'Product Not Found' });
	}
}));

export default productRouter;
