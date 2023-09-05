import express from 'express';
import {
	getProducts,
	getProductBySlug,
	getVariantBySlugAndSku,
	createProduct,
	updateProduct,
	deleteProduct
} from '../controllers/productController';
import { admin, protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:slug').get(getProductBySlug).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:slug/:sku').get(getVariantBySlugAndSku);


export default router;
