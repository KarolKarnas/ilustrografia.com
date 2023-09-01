import * as Form from '@radix-ui/react-form';
import {
	useGetProductDetailsQuery,
	useUpdateProductMutation,
} from '../../slices/productsApiSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import { SyntheticEvent, useState, useEffect } from 'react';
import {
	Category,
	Product,
	ProductOptions,
	Rating,
	Tag,
	Variation,
} from '../../types/Product';
import { toCheckProduct } from '../../utils/typeCheck';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { toast } from 'react-toastify';
import { CustomError } from '../../types/User';

const ProductEditScreen = () => {
	const { slug: productSlug } = useParams();
	const navigate = useNavigate();

	const [product, setProduct] = useState<Product>();

	const [_id, set_Id] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [rating, setRating] = useState<Rating>();

	const [categories, setCategories] = useState<Category[]>();
	const [tags, setTags] = useState<Tag[]>();
	const [images, setImages] = useState<string[]>();
	const [options, setOptions] = useState<ProductOptions>();
	const [variations, setVariations] = useState<Variation[]>();
	const [statistics, setStatistics] = useState<string[]>();

	const { data, isLoading, refetch, error } =
		useGetProductDetailsQuery(productSlug);

	console.log(data);

	const [updateProduct, { isLoading: loadingUpdate, error: updateError }] =
		useUpdateProductMutation();

	// if (updateError) {
	//   console.log(updateError);
	//   const customError = updateError as CustomError;
	//   toast.error(customError.data.message);
	//   // console.log(getError(error as ApiError))
	//   // toast.error(updateError.data.message)
	// }

	useEffect(() => {
		if (!isLoading) {
			const typedProduct = toCheckProduct(data);
			setProduct(typedProduct);

			if (typedProduct) {
				set_Id(typedProduct._id);
				setName(typedProduct.name);
				setSlug(typedProduct.slug);
				setRating(typedProduct.rating);
				setCategories(typedProduct.categories);
				setTags(typedProduct.tags);
				setImages(typedProduct.images);
				setOptions(typedProduct.options);
				setVariations(typedProduct.variations);
				setStatistics(typedProduct.statistics);
			}
		}
	}, [data]);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		try {
			await updateProduct({
				productSlug,
				name,
				slug,
				rating,
				categories,
				tags,
				images,
				options,
				variations,
				_id,
				statistics,
			}).unwrap();
			toast.success('product updated successfully');
			refetch().then((value) => setProduct(toCheckProduct(value.data)));
			navigate(`/admin/product-list/${slug}/edit`);
		} catch (err) {
			if (err instanceof Error) {
				// console.log('Error', err);
				toast.error(err.message);
			} else {
				const customError = err as CustomError;
				// console.log('CustomError', customError);
				toast.error(customError.data.message);
			}
		}
	};

	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-bold text-center mt-5'>Edit Product</h1>{' '}
			<Link to={'/admin/product-list'}>
				<button
					className={`
								
								 bg-zinc-900 text-white hover:bg-red-200
							 px-32 py-1  my-2`}
				>
					Go Back
				</button>
			</Link>{' '}
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<Message variant='bad' message={getError(error as ApiError)} />
			) : product ? (
				<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
					{/* {updateError ? (<Message variant='bad' message={getError(updateError as ApiError)} />) : null} */}
					<Form.Field className='flex flex-col' name='name'>
						<div className='flex items-baseline justify-between'>
							<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
								Name
							</Form.Label>
							<Form.Message
								className='text-md text-red-400'
								match='valueMissing'
							>
								Please enter your name
							</Form.Message>
							<Form.Message
								className='text-md text-red-400'
								match='typeMismatch'
							>
								Please provide a valid name
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
								type='text'
								required
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Control>
					</Form.Field>
					<Form.Field className='flex flex-col' name='name'>
						<div className='flex items-baseline justify-between'>
							<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
								Slug
							</Form.Label>
							<Form.Message
								className='text-md text-red-400'
								match='valueMissing'
							>
								Please enter product slug
							</Form.Message>
							{updateError && (
								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
									forceMatch={Boolean(updateError)}
								>
									Please provide a valid product slug
								</Form.Message>
							)}
						</div>
						<Form.Control asChild>
							<input
								className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
								type='text'
								required
								placeholder='Enter slug'
								value={slug}
								onChange={(e) => setSlug(e.target.value)}
							/>
						</Form.Control>
					</Form.Field>

					<Form.Field className='flex flex-col' name='name'>
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
								match={(value) =>
									Number(value) < 0 || Number(value) > 5
								}
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
								value={rating?.rating}
								onChange={(e) =>
									setRating({
										...rating,
										rating: Number(e.target.value),
										numReviews: rating?.numReviews || 0,
									})
								}
							/>
						</Form.Control>
					</Form.Field>

					<Form.Field className='flex flex-col' name='name'>
						<div className='flex items-baseline justify-between'>
							<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
								Number of Reviews
							</Form.Label>
							<Form.Message
								className='text-md text-red-400'
								match='valueMissing'
							>
								Please enter Number of Reviews
							</Form.Message>
							<Form.Message
								className='text-md text-red-400'
								match='typeMismatch'
							>
								Please provide a Number of Reviews
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input
								className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
								type='number'
								required
								placeholder='Enter Number of Reviews'
								value={rating?.numReviews}
								onChange={(e) =>
									setRating({
										...rating,
										rating: rating?.rating || 0,
										numReviews: Number(e.target.value),
									})
								}
							/>
						</Form.Control>
					</Form.Field>

					<Form.Submit asChild>
						<button
							// add disabled styling
							className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
							disabled={isLoading}
						>
							Update
						</button>
					</Form.Submit>
					{isLoading && <div>Loading...</div>}
				</Form.Root>
			) : (
				<div>No product found</div>
			)}
		</div>
	);
};
export default ProductEditScreen;
