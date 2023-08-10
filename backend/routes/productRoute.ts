import express from 'express';
import {
	getProducts,
	getProductBySlug,
	getVariantBySlugAndSku,
} from '../controllers/productController';

const productRouter = express.Router();

productRouter.route('/').get(getProducts);
productRouter.route('/:slug').get(getProductBySlug);
productRouter.route('/:slug/:sku').get(getVariantBySlugAndSku);


export default productRouter;
