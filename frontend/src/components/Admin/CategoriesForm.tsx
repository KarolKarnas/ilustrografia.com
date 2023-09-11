import * as Form from '@radix-ui/react-form';
import { SyntheticEvent, useState } from 'react';
import _ from 'lodash';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Category } from '../../types/Product';

type Props = {
	categories: Category[];
	setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const CategoriesForm = ({ categories, setCategories }: Props) => {
	const [categoryName, setCategoryName] = useState('');

	// Category
	const handleSubmitCategory = (e: SyntheticEvent) => {
		e.preventDefault();
		if (categoryName.trim() === '') {
			setCategoryName('');
			return toast.error('Just empty spaces here...');
		}
		const categorySlug = _.kebabCase(categoryName);
		//duplicate Category here
		setCategories([...categories, { name: categoryName, slug: categorySlug }]);
	};

	const handleDeleteCategory = (index: number) => {
		const updatedCategories = categories.filter((_category, i) => i !== index);
		setCategories(updatedCategories);
	};
	return (
		<Form.Root className='w-full' onSubmit={(e) => handleSubmitCategory(e)}>
			<div className='flex flex-col'>
				<h3>Category list</h3>
				{categories?.map((category, index) => (
					<div key={index} className='flex items-center'>
						<FaTrash
							className='hover:cursor-pointer hover:text-red-300'
							onClick={() => handleDeleteCategory(index)}
						/>{' '}
						{category.name}
					</div>
				))}
			</div>

			<Form.Field className='flex flex-col' name='name'>
				<div className='flex items-baseline justify-between'>
					<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
						Category Name
					</Form.Label>
					<Form.Message className='text-md text-red-400' match='valueMissing'>
						Please enter Category Name
					</Form.Message>
					<Form.Message className='text-md text-red-400' match='typeMismatch'>
						Please provide a valid Category Name
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
						type='text'
						required
						placeholder='Enter Category Name'
						value={categoryName}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<button
					// add disabled styling
					className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
					// disabled={isLoading}
				>
					Add Category
				</button>
			</Form.Submit>
		</Form.Root>
	);
};
export default CategoriesForm;
