import { Link } from 'react-router-dom';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { Product } from '../../types/Product';
import ProductMain from '../../components/ProductMain';
import Spinner from '../../components/Spinner';

const HomePage = () => {
	const { data: products, isLoading, error } = useGetProductsQuery();

	// console.log(products)
	return isLoading ? (
		<Spinner />
	) : error ? (
		<div>{getError(error as ApiError)}</div>
	) : (
		<div className='w-10/12'>
			<h1 className='text-3xl font-cormorant-infant font-bold text-center mt-5'>
				Welcome to ilustrografia
			</h1>
			<h2 className='text-xl font-bold text-center underline mb-10'>
				These are our products:
			</h2>
			{/* <ProjectGroup /> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:bg-slate-600'>
				{products &&
					products.map((product: Product) => (
						<ProductMain key={product._id} product={product}/>

					))}
			</div>
		</div>
	);
};
export default HomePage;
