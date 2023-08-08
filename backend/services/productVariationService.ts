import { productVariations } from '../data/_products';
import { ProductVariation } from '../_types';

const getProductVariations = (): ProductVariation[] => {
	return productVariations;
};

export default {
	getProductVariations,
};
