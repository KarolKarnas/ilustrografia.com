import express from 'express';
import {
	getProducts,
	getProductBySlug,
	getVariantBySlugAndSku,
} from '../controllers/productController';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:slug').get(getProductBySlug);
router.route('/:slug/:sku').get(getVariantBySlugAndSku);


export default router;
