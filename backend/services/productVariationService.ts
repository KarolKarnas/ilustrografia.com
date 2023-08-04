import { productVariations } from '../data/products';
import { ProductVariation } from '../types';

const getProductVariations = (): ProductVariation[] => {
	return productVariations;
};

export default {
	getProductVariations,
};
