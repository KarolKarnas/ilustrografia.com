import { Link, useParams } from 'react-router-dom';
import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import {
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} from '../../slices/usersApiSlice';
import { useState, useEffect, SyntheticEvent } from 'react';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import Message from '../../components/Message';

import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UserEditPage = () => {
	const { id } = useParams();

	const [userId, setUserId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	if (!id) {
		return <div>No id provided</div>;
	}

	const { data: user, isLoading, refetch, error } = useGetUserDetailsQuery(id);

	const [updateUser, { isLoading: loadingUpdate, error: updateError }] =
		useUpdateUserMutation();

	useEffect(() => {
		if (!isLoading && user) {
			setUserId(user._id);
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
		}
	}, [user]);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (name.trim() === '' || email.trim() === '') {
			setName('');
			return toast.error('Just empty spaces here...');
		}

		try {
			await updateUser({ _id: userId, name, email, isAdmin }).unwrap();
			refetch();
			toast.success('user updated successfully');
		} catch (error) {
			toast.error(getError(error as ApiError));
		}
	};

	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-bold text-center mt-5'>Edit Product</h1>{' '}
			<Link to={'/admin/user-list'}>
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
			) : user ? (
				<div className='flex w-full justify-center'>
					<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
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
								></Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='text'
									required
									placeholder='Enter name'
									value={name}
									onChange={(e) => {
										const newName = e.target.value;

										setName(newName);
									}}
								/>
							</Form.Control>
						</Form.Field>

						<Form.Field className='flex flex-col' name='email'>
							<div className='flex items-baseline justify-between'>
								<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
									Email
								</Form.Label>
								<Form.Message
									className='text-md text-red-400'
									match='valueMissing'
								>
									Please enter your email
								</Form.Message>

								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
								>
									Enter correct email
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='email'
									required
									placeholder='Enter email'
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</Form.Control>
						</Form.Field>
						<div className='flex items-center mt-2'>
							<Checkbox.Root
								className='bg-white w-8 h-8 mr-2 rounded-lg flex items-center justify-center shadow-xl border hover:bg-red-100 hover:cursor-pointer hover:shadow-sm'
								id='c1'
								checked={isAdmin}
								onCheckedChange={() => setIsAdmin(!isAdmin)}
							>
								<Checkbox.Indicator>
									<FaCheck />
								</Checkbox.Indicator>
							</Checkbox.Root>
							<label className='text-black' htmlFor='c1'>
								Are you admin Madame/Sir?
							</label>
						</div>

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
				</div>
			) : (
				<div>No product found</div>
			)}
		</div>
	);
};

export default UserEditPage;
