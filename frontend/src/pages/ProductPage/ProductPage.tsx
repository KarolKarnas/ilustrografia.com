import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetProductDetailsBySlugQuery } from '../../hooks/productHooks';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import _ from 'lodash';
// import { isString } from '../../utils/typeCheck';

const ProductPage = () => {
	const { slug } = useParams();
	if (!slug) {
		return <div>No slug provided</div>;
	}
	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsBySlugQuery(slug);
	if (!product) {
		return <div>No product found</div>;
	}

	const materialValues = _.uniq(_.map(product.variations, 'options.material'));

	console.log(materialValues);

	// const options = Object.keys(product.options);
	// console.log(options);

	return isLoading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{getError(error as ApiError)}</div>
	) : (
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
						{/* BREADCRUMBS */}
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
						<h1 className=' text-3xl'>{product.name}</h1>
						<>
							{/* {Object.keys(product.options).map((option) => {
						return <div key={option}>{product.options[option]}</div>;
					})} */}
					{/* {Object.keys(product.options).forEach(option => {
						console.log(option)
						console.log(product.options[option])
						
						return <p>{option}</p>;
					})} */}

<h3>{product.options.material.optionName}</h3>
{/* {product.variations.map(variation => <p key={variation.SKU}>{variation.SKU}</p>)} */}
{/* <div className='flex gap-3'>
	{product.options.material}
</div> */}


						
						</>
					</div>
				</div>
			) : (
				<div>Something went wrong</div>
			)}
		</>
	);
};
export default ProductPage;
