import { useDispatch } from 'react-redux';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import _ from 'lodash';
import {
	MaterialOptionNoName,
	Product,
	SizeOptionNoName,
} from '../../types/Product';
import { useGetProductDetailsQuery } from '../../slices/productsApiSlice';
import VariationDescription from './VariationDescription';
import { Variation } from '../../types/Product';
import { addToCart } from '../../slices/cartSlice';

const ProductPage = () => {
	const { slug } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);
	const [variation, setVariation] = useState<Variation>();

	if (!slug) {
		return <div>No slug provided</div>;
	}
	const { data: product, isLoading, error } = useGetProductDetailsQuery(slug);

	useEffect(() => {
		if (!isLoading) {
			setVariation(product.variations[0]);
		}
	}, [isLoading, product]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<div>{getError(error as ApiError)}</div>;
	}
	// console.log(product);
	// console.log(variation);
	// console.log(qty);

	const materialValues = _.uniq(_.map(product.variations, 'options.material'));

	const sizeValues = _.uniq(_.map(product.variations, 'options.size'));

	const getSizesForMaterialFromProduct = (
		product: Product,
		material: string
	) => {
		const sizes = _.uniq(
			product.variations
				.filter((variation) => variation.options.material === material)
				.map((variation) => variation.options.size)
		);
		return sizes;
	};

	const sizesByMaterial: { [key: string]: string[] } = {};

	materialValues.forEach((material: string) => {
		sizesByMaterial[`${material}`] = getSizesForMaterialFromProduct(
			product,
			material
		);
	});

	const sizesByMaterialTitle: { [key: string]: string[] } = {};

	for (const property in sizesByMaterial) {
		const names = sizesByMaterial[property];
		const titles = names.map((name) => product.options.size[name].title);
		sizesByMaterialTitle[property] = titles;
	}

	const materialTitle = materialValues.map(
		(name) => product.options.material[name as keyof MaterialOptionNoName].title
	);
	//TITLE_TO_NAME_MATERIAL
	const titleToNameMaterial: { [key: string]: string } = {};

	materialTitle.forEach(
		(title, index) => (titleToNameMaterial[title] = materialValues[index])
	);

	const sizeTitle = sizeValues.map(
		(name) => product.options.size[name as keyof SizeOptionNoName].title
	);

	//TITLE_TO_NAME_SIZE
	const titleToNameSize: { [key: string]: string } = {};

	sizeTitle.forEach(
		(title, index) => (titleToNameSize[title] = sizeValues[index])
	);

	// console.log(titleToNameSize)

	const getVariation = (material: string, size: string) => {
		return _.find(product.variations, { options: { material, size } });
	};

	const handleChangeSize = (e: SyntheticEvent) => {
		const targetSize = e.currentTarget.textContent;
		if (targetSize) {
			const shortSizeName = titleToNameSize[targetSize];
			if (variation) {
				const currentVariation = getVariation(
					variation?.options.material,
					shortSizeName
				);
				setVariation(currentVariation);
			}
		}
	};

	const handleChangeMaterial = (e: SyntheticEvent) => {
		const targetMaterial = e.currentTarget.textContent;
		if (targetMaterial) {
			const shortMaterialName = titleToNameMaterial[targetMaterial];
			// if same size exist
			if (variation) {
				const theSame = getVariation(
					shortMaterialName,
					variation?.options.size
				);

				if (theSame) {
					setVariation(theSame);
				} else {
					const cheapestOfMaterialVariation = product.variations.find(
						(variation: Variation) =>
							variation.options.material === shortMaterialName
					);
					setVariation(cheapestOfMaterialVariation);
				}
			}
		}
	};

	const addToCartHandler = () => {
		dispatch(addToCart({ ...variation, qty }));
		// navigate('/cart');
	};

	return (
		<>
			<div className='flex gap-20 my-5 justify-center'>
				<div className='w-4/12'>
					<img
						src={
							variation &&
							product.options.material[variation.options.material].images[0]
						}
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
					{/* SIZES */}
					<div className='flex gap-1'>
						{variation &&
							sizesByMaterialTitle[variation.options.material] &&
							sizesByMaterialTitle[variation.options.material].map((option) => (
								<button
									onClick={handleChangeSize}
									key={option}
									className={`${
										option ===
										product.options.size[variation.options.size].title
											? 'bg-red-200 text-white border-red-400 '
											: ''
									}font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white`}
								>
									{option}
								</button>
							))}
					</div>
					<hr className=' h-px mx-auto my-3'></hr>
					{/* Materials */}
					<div className='flex gap-1'>
						{variation &&
							materialTitle.map((option) => {
								return (
									<button
										onClick={handleChangeMaterial}
										key={option}
										className={`${
											option ===
											product.options.material[variation.options.material].title
												? 'bg-red-200 text-white border-red-400 '
												: ''
										}font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white`}
									>
										{option}
									</button>
								);
							})}
					</div>
					<div className='flex justify-evenly'>
						<div>SKU {variation?.SKU}</div>
						<div>Price {variation?.price}zł</div>
						<div>Price {variation && variation?.price * qty}zł</div>
					</div>
					<hr className=' h-px mx-auto my-3'></hr>
					{/* select quantity */}
					<div className='flex justify-around'>
						<div>
							{variation && variation.countInStock > 0
								? 'In Stock'
								: 'Out Of Stock'}
						</div>
						<select
							className=' px-5'
							onChange={(e) => setQty(Number(e.target.value))}
						>
							{variation &&
								Array.from({ length: variation.countInStock }, (_, index) => (
									<option key={index + 1} value={index + 1}>
										{index + 1}
									</option>
								))}
						</select>
					</div>
					<button
						onClick={addToCartHandler}
						className={`${
							variation?.countInStock === 0
								? 'bg-zinc-100 text-zinc-300'
								: 'bg-zinc-900 text-white hover:bg-red-200'
						}   px-32 py-1  my-2`}
						disabled={variation?.countInStock === 0}
					>
						Add to Cart
					</button>
					{product.statistics.length > 0 ? (
						<ul className='list-disc pl-8'>
							{product.statistics.map((stat: string) => (
								<li className='text-xs text-zinc-500  ' key={stat}>
									{stat}
								</li>
							))}
						</ul>
					) : null}
					<hr className=' h-px mx-auto my-3'></hr>
				</div>
			</div>
		</>
	);
};
export default ProductPage;
