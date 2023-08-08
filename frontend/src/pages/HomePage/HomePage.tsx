// import ProjectGroup from '../../components/ProjectGroup';
import Rating from '../../components/Rating';
// import { products } from '../../data';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../hooks/productHook';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';



const HomeScreen = () => {
	const { data: products, isLoading, error } = useGetProductsQuery()


	return isLoading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{getError(error as ApiError)}</div>
	) : (
		<>
			<h1 className='text-3xl font-bold text-center mt-5'>
				Welcome to ilustrografia
			</h1>
			<h2 className='text-xl font-bold text-center underline mb-10'>
				These are our products:
			</h2>
			{/* <ProjectGroup /> */}
			<div className='flex'>
				{products && products.map((product) => (
					<div key={product._id}>
						<div className='bg-red-200 m-2'>
							<h4 className='p-2 italic'>{product.name}</h4>
							<Link to={`shop/${product.slug}`}>
								<img
									className='h-80 hover:cursor-pointer hover:scale-110 transition duration-300'
									src={product.images[0]}
									alt={`${product.slug}-${product.categories[0].slug}`}
								/>
							</Link>
							<div className='p-2'>
								<Rating
									rating={product.rating.rating}
									numReviews={product.rating.numReviews}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default HomeScreen;
