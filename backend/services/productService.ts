import { products } from '../data/products';
import { ProductNoId } from '../types/Product';

const getProducts = (): ProductNoId[] => {
	return products;
};

const getProduct = (slug: string): ProductNoId | undefined => {
	const product = products.find((product) => product.slug === slug);

	return product;
};

export default {
	getProducts,
	getProduct,
};
