import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetProductDetailsBySlugQuery } from '../../hooks/productHooks';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import _ from 'lodash';
import { MaterialOptionNoName, Product, SizeOptionNoName } from '../../types/Product';

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

	// const sizeValues = _.uniq(_.map(product.variations, 'options.size'))

	// console.log(materialValues);
	// console.log(sizeValues.sort())

		const getSizesForMaterialFromProduct = (product: Product, material: string) => {
		const sizes = _.uniq(product.variations
			.filter(variation => variation.options.material === material)
			.map(variation => variation.options.size)
		);
		return sizes;
	};
	
	// Get array of all sizes for 'art-print' material from the provided product
	const sizesForArtPrint = getSizesForMaterialFromProduct(product, 'art-print');

	console.log('artPrint ', sizesForArtPrint);

	const sizesForArtPrintTitle = sizesForArtPrint.map(name => product.options.size[name as keyof SizeOptionNoName].title)

	const materialTitle = materialValues.map(name => product.options.material[name as keyof MaterialOptionNoName].title)

	console.log(sizesForArtPrintTitle)

	return isLoading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{getError(error as ApiError)}</div>
	) : (
		<>
			{product ? (
				<div className='flex gap-20 my-5 justify-center'>
					<div className='w-4/12'>
						<img
							src={`/images/${product.categories[0].slug}/${product.slug}-1.jpg`}
							alt={product.slug}
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
					

						<div className='flex gap-1'>
{sizesForArtPrintTitle.map(option => <button
									// onClick={handleChangeSize}
									key={option}
									className='font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white '
								>
									{option}
								</button>)}
								</div>
								<hr className=' h-px mx-auto my-3'></hr>
								<div className='flex gap-1'>
{materialTitle.map(option => <button
									// onClick={handleChangeSize}
									key={option}
									className='font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white '
								>
									{option}
								</button>)}
								</div>
						
					
					</div>
				</div>
			) : (
				<div>Something went wrong</div>
			)}
		</>
	);
};
export default ProductPage;
