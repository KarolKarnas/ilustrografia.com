import express from 'express';
import productService from '../services/productService';

const productRouter = express.Router();

productRouter.get('/', (_req, res) => {
	res.send(productService.getProducts());
});

productRouter.get('/:slug', (req, res) => {
	const product = productService.getProduct(req.params.slug);
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'Product Not Found' });
	}
});

export default productRouter;
