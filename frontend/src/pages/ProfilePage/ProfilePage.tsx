import * as Form from '@radix-ui/react-form';
import { SyntheticEvent, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';

import { useUpdateProfileMutation } from '../../slices/usersApiSlice';
import { RootState } from '../../store';
import { CustomError } from '../../types/User';

const ProfilePage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [updateProfile, { isLoading: loadingUpdateProfile, error }] = useUpdateProfileMutation();
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state: RootState) => state.auth);

	console.log(userInfo);

	useEffect(() => {
		setName(userInfo.name);
		setEmail(userInfo.email);
	}, [userInfo]);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('Password do not match');
		} else {
			try {
				const res = await updateProfile({ name, email, password }).unwrap();
				dispatch(setCredentials(res));
			} catch (err) {
				if (err instanceof Error) {
					toast.error(err.message);
				} else {
					const customError = err as CustomError;
					toast.error(customError.data.message);
				}
			}
		}
		console.log('hello');

		// updateProfile({_id: userInfo._id, name, email, password })
	};

	return (
		<div className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-bold text-center mt-5'>Update Profile</h1>
			<div className='flex  justify-center  w-8/12 gap-10'>
				<div className='w-1/4'>
					<Form.Root onSubmit={(e) => handleSubmit(e)}>
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
									Please provide a valid email
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='email'
									required
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Control>
						</Form.Field>
						<Form.Field className='flex flex-col' name='password'>
							<div className='flex items-baseline justify-between'>
								<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
									Password
								</Form.Label>
								<Form.Message
									className='text-md text-red-400'
									match='valueMissing'
								>
									Please enter your password
								</Form.Message>
								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
								>
									Please provide a valid password
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Control>
						</Form.Field>
						<Form.Field className='flex flex-col' name='confirmPassword'>
							<div className='flex items-baseline justify-between'>
								<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
									Confirm Password
								</Form.Label>
								<Form.Message
									className='text-md text-red-400'
									match='valueMissing'
								>
									Please confirm your password
								</Form.Message>
								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
								>
									Please confirm a valid password
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='password'
									required
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</Form.Control>
						</Form.Field>
						<Form.Submit asChild>
							<button
								// add disabled styling
								className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
								// disabled={isLoading}
							>
								Update
							</button>
						</Form.Submit>
						{/* {isLoading && <div>Loading...</div>} */}
					</Form.Root>
				</div>
				<div className='w-3/4'>Col2</div>
			</div>
		</div>
	);
};
export default ProfilePage;
