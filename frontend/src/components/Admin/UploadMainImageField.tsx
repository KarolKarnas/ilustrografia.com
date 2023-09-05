import * as Form from '@radix-ui/react-form';
import { ChangeEvent } from 'react';
import { useUploadProductImageMutation } from '../../slices/productsApiSlice';
import { toast } from 'react-toastify';
import { CustomError } from '../../types/User';

type Props = {
	images: string[];
	setImages: React.Dispatch<React.SetStateAction<string[]>>;
};
const UploadMainImageField = ({ images, setImages }: Props) => {

	const [uploadProductImage, { isLoading: loadingUpload }] =
		useUploadProductImageMutation();


	const uploadFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files === null) {
			console.log('no file selected');
		} else {
			const formData = new FormData();
			formData.append('image', e.target.files[0]);
			try {
				const res = await uploadProductImage(formData).unwrap();
				console.log(res);
				toast.success(res.message);
				setImages([res.image]);
			} catch (err) {
				if (err instanceof Error) {
					toast.error(err.message);
				} else {
					const customError = err as CustomError;
					toast.error(customError.data.message);
				}
			}
		}
	};

	return (
		<>
			<Form.Field className='flex flex-col' name='mainImageUrl'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						Main Image URL
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter Main Image URL
					</Form.Message>
					<Form.Message
						className='text-md text-red-400'
						match={(value) => Number(value) < 0}
					>
						Please provide a Main Image URL
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='text'
						required
						placeholder='Enter Main image url'
						value={images && images[0]}
						onChange={(e) => setImages([e.target.value])}
						// onChange={(e) => setNewStatistic(e.target.value)}
					/>
				</Form.Control>
			</Form.Field>


			<Form.Field className='flex flex-col' name='uploadMainImage'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						Add Product Image
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter Product Image
					</Form.Message>
					<Form.Message className='text-md text-red-400' match='typeMismatch'>
						Please provide a Product Image
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='file'
						// required
						// placeholder='Enter Number of Reviews'
						// value={rating?.numReviews}
						onChange={uploadFileHandler}
					/>
				</Form.Control>
			</Form.Field>
		</>
	);
};
export default UploadMainImageField;
