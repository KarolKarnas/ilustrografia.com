import * as Form from '@radix-ui/react-form';
import { SyntheticEvent, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import { RootState } from '../../store';
import { CustomError, UserInfo } from '../../types/User';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();

	//type on destructuring
	const { userInfo }: { userInfo: UserInfo | null } = useSelector(
		(state: RootState) => state.auth
	);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		// console.log('hello');
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate(redirect);
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
			<h1 className='text-3xl font-bold text-center mt-5'>Login</h1>
			<Form.Root className='w-4/12' onSubmit={(e) => handleSubmit(e)}>
				<Form.Field className='flex flex-col' name='email'>
					<div className='flex items-baseline justify-between'>
						<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
							Email
						</Form.Label>
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your email
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
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
						<Form.Message className='text-md text-red-400' match='valueMissing'>
							Please enter your password
						</Form.Message>
						<Form.Message className='text-md text-red-400' match='typeMismatch'>
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
				<Form.Submit asChild>
					<button
          // add disabled styling
						className='bg-zinc-900 text-white hover:bg-red-200 hover:cursor-pointer w-full text-center py-2  mt-5'
						disabled={isLoading}
					>
						Login
					</button>
				</Form.Submit>
				{isLoading && (<div>Loading...</div>)}
			</Form.Root>
			<p>
				New customer?{' '}
				<Link className='text-red-700' to={redirect ? `/register?redirect=${redirect}` : '/register'}>
					Register
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;