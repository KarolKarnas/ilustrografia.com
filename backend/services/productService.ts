import { products } from '../data/data';
import { Product } from '../types';

const getProducts = (): Product[] => {
	return products;
};

export default {
	getProducts,
};
