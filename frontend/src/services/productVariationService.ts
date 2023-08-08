import axios from 'axios';
import { ProductVariation } from '../_types';

const getAll = async () => {
	const { data } = await axios.get<ProductVariation[]>(
		'/api/product-variations'
	);
	return data;
};

export default { getAll };
