import express from 'express';
import productService from '../services/productService';

const productRouter = express.Router();

productRouter.get('/', (_req, res) => {
	res.send(productService.getProducts());
});

export default productRouter;
