import { products } from '../data/Products';
import { Product } from '../types/Product';

const getProducts = (): Product[] => {
	return products;
};

const getProduct = (slug: string): Product | undefined => {
	const product = products.find((product) => product.slug === slug);

	return product;
};

export default {
	getProducts,
	getProduct,
};
