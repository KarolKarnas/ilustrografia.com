import express from 'express';
import productVariationService from '../services/productVariationService';

const productVariationRouter = express.Router();

productVariationRouter.get('/', (_req, res) => {
	res.send(productVariationService.getProductVariations());
});

export default productVariationRouter;
