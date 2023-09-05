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

import _ from 'lodash';
import TagsForm from '../../components/Admin/TagsForm';
import CategoriesForm from '../../components/Admin/CategoriesForm';
import {
	productOptionsInitial,
	ratingInitial,
} from '../../utils/initialStates';
import StatisticsForm from '../../components/Admin/StatisticsForm';
import VariationForm from '../../components/Admin/VariationForm';
import UploadArtPrintField from '../../components/Admin/UploadArtPrintField';
import UploadMainImageField from '../../components/Admin/UploadMainImageField';
import NumberReviewsField from '../../components/Admin/NumberReviewsField';
import RatingField from '../../components/Admin/RatingField';
import NameField from '../../components/Admin/NameField';
import UploadCanvasField from '../../components/Admin/UploadCanvasField';
import UploadPosterField from '../../components/Admin/UploadPosterField';
import UploadPremiumField from '../../components/Admin/UploadPremiumField';

const ProductEditScreen = () => {
	const { slug: productSlug } = useParams();
	const navigate = useNavigate();

	const [product, setProduct] = useState<Product>();

	const [_id, set_Id] = useState('');
	const [name, setName] = useState('');
	const [slug, setSlug] = useState('');
	const [rating, setRating] = useState<Rating>(ratingInitial);
	const [categories, setCategories] = useState<Category[]>([]);
	const [tags, setTags] = useState<Tag[]>([]);
	const [images, setImages] = useState<string[]>([]);
	const [options, setOptions] = useState<ProductOptions>(productOptionsInitial);
	const [statistics, setStatistics] = useState<string[]>([]);
	const [variations, setVariations] = useState<Variation[]>([]);

	const { data, isLoading, refetch, error } =
		useGetProductDetailsQuery(productSlug);

	const [updateProduct, { isLoading: loadingUpdate, error: updateError }] =
		useUpdateProductMutation();

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
		if (name.trim() === '') {
			setName('');
			return toast.error('Just empty spaces here...');
		}
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
			{loadingUpdate && <div>Loading...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<Message variant='bad' message={getError(error as ApiError)} />
			) : product ? (
				<div className='flex w-full justify-center gap-10 '>
					<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
						<NameField
							updateError={updateError}
							name={name}
							setName={setName}
							setSlug={setSlug}
						/>
						<RatingField rating={rating} setRating={setRating} />
						<NumberReviewsField rating={rating} setRating={setRating} />
						<UploadMainImageField images={images} setImages={setImages} />

						<UploadArtPrintField options={options} setOptions={setOptions} />
						<UploadCanvasField options={options} setOptions={setOptions} />
						<UploadPosterField options={options} setOptions={setOptions} />
						<UploadPremiumField options={options} setOptions={setOptions} />

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

					<div className='w-3/12'>
						<StatisticsForm
							statistics={statistics}
							setStatistics={setStatistics}
						/>
						<CategoriesForm
							categories={categories}
							setCategories={setCategories}
						/>
						<TagsForm tags={tags} setTags={setTags} />
						<VariationForm
							variations={variations}
							setVariations={setVariations}
							slug={slug}
							product={product}
						/>
					</div>
				</div>
			) : (
				<div>No product found</div>
			)}
		</div>
	);
};
export default ProductEditScreen;
