import { useAppDispatch, useAppSelector } from '../../slices/reduxHooks';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import _ from 'lodash';
import {
	MaterialOptionNoNameKeys,
	Product,
	SizeOptionNoNameKeys,
} from '../../types/Product';
import {
	useGetProductDetailsQuery,
	useCreateProductReviewMutation,
} from '../../slices/productsApiSlice';
import VariationDescription from './VariationDescription';
import { Variation } from '../../types/Product';
import { addToCart } from '../../slices/cartSlice';
import VariationCharacteristics from './VariationCharacteristics';
import { toast } from 'react-toastify';
import ToastLink from '../../components/ToastLink';

import * as Form from '@radix-ui/react-form';
import Rating from '../../components/Rating';

const ProductPage = () => {
	const [reviewRating, setReviewRating] = useState(0);
	const [reviewComment, setReviewComment] = useState('');
	// const [userInfo, setUserInfo] = useState<UserInfo>()
	const params = useParams();
	const slug = params.slug

	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);
	const [variation, setVariation] = useState<Variation>();

	// console.log(variation);
	if (!slug) {
		return <div>No slug provided</div>;
	}
	const {
		data: product,
		isLoading,
		refetch,
		error,
	} = useGetProductDetailsQuery(slug);

	// console.log(product)

	const [createProductReview, { isLoading: loadingProductReview }] =
		useCreateProductReviewMutation();

	const { userInfo } = useAppSelector((state) => state.auth);

	const getVariation = (material: string, size: string) => {
		return _.find(product?.variations, { options: { material, size } });
	};

	useEffect(() => {
		if (!isLoading && searchParams && product) {
			const material = searchParams.get('material');
			const size = searchParams.get('size');
			if (material && size) {
				// console.log(material, size);
				const variation = getVariation(material, size);
				setVariation(variation);
			} else {
				setVariation(product.variations[0]);
			}
		}
	}, [isLoading, product]);

	useEffect(() => {
		if (variation && product) {
			// Check if variation and product are defined
			setSearchParams({
				material: variation.options.material,
				size: variation.options.size,
			});
		}
	}, [variation, product]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<div>{getError(error as ApiError)}</div>;
	}

	if (!product) {
		return <div>Loading...</div>;
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
		const titles = names.map(
			(name) => product.options.size[name as SizeOptionNoNameKeys].title
		);
		sizesByMaterialTitle[property] = titles;
	}

	const materialTitle = materialValues.map(
		(name) => product.options.material[name as MaterialOptionNoNameKeys].title
	);
	//TITLE_TO_NAME_MATERIAL
	const titleToNameMaterial: { [key: string]: string } = {};

	materialTitle.forEach(
		(title, index) => (titleToNameMaterial[title] = materialValues[index])
	);

	const sizeTitle = sizeValues.map(
		(name) => product.options.size[name as SizeOptionNoNameKeys].title
	);

	//TITLE_TO_NAME_SIZE
	const titleToNameSize: { [key: string]: string } = {};

	sizeTitle.forEach(
		(title, index) => (titleToNameSize[title] = sizeValues[index])
	);

	// console.log(titleToNameSize)

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
		if (variation) {
			const pathnameWithQuery =
				window.location.pathname + window.location.search;
			const variationName = `${product.name} ${
				product.options.material[
					variation.options.material as MaterialOptionNoNameKeys
				].title
			} ${
				product.options.size[variation.options.size as SizeOptionNoNameKeys]
					.title
			}`;
			dispatch(
				addToCart({
					...variation,
					_id: variation._id!,
					qty,
					image:
						product.options.material[
							variation.options.material as MaterialOptionNoNameKeys
						].images[0],
					variationName,
					pathnameWithQuery,
				})
			);
			toast.success(<ToastLink product={variationName} />);
			// navigate('/cart');
		}
	};

	const handleSubmitReview = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			await createProductReview({
				slug: product.slug,
				comment: reviewComment,
				rating: reviewRating,
			}).unwrap();
			toast.success('Review created successfully');
			refetch();
		} catch (err) {
			toast.error(getError(err as ApiError));
		}
	};

	if (variation) {
		return (
			<>
				<div className='flex gap-20 my-5 justify-center'>
					<div className='w-4/12 '>
						<div className='w-4/12 fixed top-36'>
							<img
								src={
									variation &&
									product.options.material[
										variation.options.material as MaterialOptionNoNameKeys
									].images[0]
								}
								alt={product.slug}
							/>
						</div>
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
						<h1 className=' text-3xl font-fondamento'>
							{product.name}{' '}
							<span className='text-xl'>
								{
									product.options.material[
										variation.options.material as MaterialOptionNoNameKeys
									].title
								}{' '}
								{
									product.options.size[
										variation.options.size as SizeOptionNoNameKeys
									].title
								}
							</span>
						</h1>
						{/* RATING */}

						<Rating
							rating={product.rating.rating}
							numReviews={product.rating.numReviews}
						/>
						{/* SIZES */}
						<div className='flex gap-1 mt-2'>
							{sizesByMaterialTitle[variation.options.material].map(
								(option) => (
									<button
										onClick={handleChangeSize}
										key={option}
										className={`${
											option ===
											product.options.size[
												variation.options.size as SizeOptionNoNameKeys
											].title
												? 'bg-red-200 text-white border-red-400 '
												: ''
										}font-light text-sm border border-black p-0.5 hover:border-red-400 hover:bg-red-200 hover:text-white`}
									>
										{option}
									</button>
								)
							)}
						</div>
						<hr className=' h-px mx-auto my-3'></hr>
						{/* Materials */}
						<div className='flex gap-1'>
							{materialTitle.map((option) => {
								return (
									<button
										onClick={handleChangeMaterial}
										key={option}
										className={`${
											option ===
											product.options.material[
												variation.options.material as MaterialOptionNoNameKeys
											].title
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
							<div>Price ${variation?.price}</div>
							<div>Price ${variation?.price * qty}</div>
						</div>
						<hr className=' h-px mx-auto my-3'></hr>
						{/* select quantity */}
						<div className='flex justify-around'>
							<div>
								{variation.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
							</div>
							<select
								className=' px-5'
								onChange={(e) => setQty(Number(e.target.value))}
							>
								{Array.from({ length: variation.countInStock }, (_, index) => (
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

						{
							<div className='leading-tight font-light text-zinc-500 text-sm'>
								<VariationDescription
									variationMaterial={variation.options.material}
								/>{' '}
								<hr className=' h-px mx-auto my-3'></hr>
							</div>
						}

						{
							<VariationCharacteristics
								variationMaterial={variation.options.material}
							/>
						}
						{product.reviews ? (
							<div className='flex flex-col gap-4 '>
								<h3>Add Review</h3>
								{product.reviews?.map((review, index) => {
									// console.log(review);
									return (
										<div
											key={index}
											className='flex flex-col bg-red-50 p-4 shadow-md rounded-md'
										>
											<h5 className='flex font-semibold '>{review.name}</h5>
											<p className='text-sm italic'>{review.comment}</p>
											<p className=' text-xs '>
												{review.createdAt.substring(0, 10)}
											</p>

											<Rating rating={review.rating} />
										</div>
									);
								})}
							</div>
						) : (
							<div>No reviews yet, be the first one</div>
						)}

						{userInfo && (
							<Form.Root
								className='w-full'
								onSubmit={(e) => handleSubmitReview(e)}
							>
								<Form.Field className='flex flex-col' name='review rating'>
									<div className='flex items-baseline justify-between'>
										<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
											Rating (0-5)
										</Form.Label>
										<Form.Message
											className='text-md text-red-400'
											match='valueMissing'
										>
											Please enter Rating
										</Form.Message>
										<Form.Message
											className='text-md text-red-400'
											match={(value) => Number(value) < 0 || Number(value) > 5}
										>
											Please provide a valid Rating
										</Form.Message>
									</div>
									<Form.Control asChild>
										<input
											className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
											type='number'
											required
											placeholder='Enter rating'
											value={reviewRating}
											onChange={(e) => setReviewRating(Number(e.target.value))}
										/>
									</Form.Control>
								</Form.Field>

								<Form.Field className='flex flex-col' name='comment'>
									<div className='flex items-baseline justify-between'>
										<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
											Comment
										</Form.Label>
										<Form.Message
											className='text-md text-red-400'
											match='valueMissing'
										>
											Please enter your Comment
										</Form.Message>

										<Form.Message
											className='text-md text-red-400'
											match='typeMismatch'
										></Form.Message>
									</div>
									<Form.Control asChild>
										<input
											className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
											type='text'
											required
											placeholder='Enter name'
											value={reviewComment}
											onChange={(e) => {
												setReviewComment(e.target.value);
											}}
										/>
									</Form.Control>
								</Form.Field>

								<Form.Submit asChild>
									<button
										// add disabled styling
										className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
										// disabled={isLoading}
									>
										Add Review
									</button>
								</Form.Submit>
							</Form.Root>
						)}
					</div>
				</div>
			</>
		);
	} else {
		return <div>No variation</div>;
	}
};
export default ProductPage;
