import axios from 'axios';
import { Product } from '../types/Product';

const getAll = async () => {
	const { data } = await axios.get<Product[]>('/api/products');
	return data;
};

export default { getAll };
