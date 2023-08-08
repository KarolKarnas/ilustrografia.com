import express from 'express';
import productService from '../services/productService';

const productRouter = express.Router();

productRouter.get('/', (_req, res) => {
	res.send(productService.getProducts());
});

productRouter.get('/:slug', (req, res) => {
	res.json(productService.getProduct(req.params.slug));
});

export default productRouter;
