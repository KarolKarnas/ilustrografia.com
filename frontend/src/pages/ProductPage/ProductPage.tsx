import { useParams } from 'react-router-dom';
import { products } from '../../data';
import { Link } from 'react-router-dom';
import VariationDescription from './VariationDescription';

const ProductPage = () => {
	const { slug } = useParams();

	const product = products.find((product) => product.slug === slug);
	console.log(product);

	return (
		<>
			{product ? (
				<div className='flex gap-20 my-5 justify-center '>
					<div className='w-4/12'>
						<img
							src={`/images/${product.categories[0].slug}/${product.slug}-1.jpg`}
							alt='bazylica'
						/>
					</div>
          <div className='w-4/12'>
          <p className=' text-zinc-300'>
							<Link to={`/shop`} className=' hover:text-red-400 text-xs'>
								shop
							</Link>{' '}
							/{' '}
							<Link
								to={`/shop/${product.categories[0].slug}`}
								className=' hover:text-red-400 text-xs'
							>
								{product.categories[0].slug}
							</Link>{' '}
							/{' '}
							<Link
								to={`/shop/${product.categories[0].slug}/${product.slug}`}
								className=' hover:text-red-400 text-xs'
							>
								{product.slug}
							</Link>{' '}
							/{' '}
						</p>
            <h1 className=' text-3xl'>
							{product.name}
						</h1>
          </div>
				</div>

			) : (
				<div>Something went wrong</div>
			)}
		</>
	);
};
export default ProductPage;
