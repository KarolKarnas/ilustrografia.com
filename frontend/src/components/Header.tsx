
import { useAppDispatch, useAppSelector } from '../slices/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { VariationCart } from '../types/Product';

import { GrCart, GrUser, GrFavorite } from 'react-icons/gr';
import { FaUserAltSlash } from 'react-icons/fa';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/logo-ilustrografia.png';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import Dropdown from './Dropdown';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const { cartItems } = useAppSelector((state) => state.cart);

	console.log(cartItems)
	const { userInfo } = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const handleClick = () => {
		setIsActive(!isActive);
	};

	const handleLogout = async () => {
		try {
			await logoutApiCall(null).unwrap();
			dispatch(logout(null));
			navigate('/login');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<header className='w-full bg-slate-100 py-2'>
			<nav className='flex items-center justify-around'>
				<div className='hidden lg:flex gap-x-3 items-center w-20'>
					<Link
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						to={'https://www.facebook.com/ilustrografiaPL/'}
					>
						<FaFacebook className='text-white' />
					</Link>
					<Link
						to={'https://www.instagram.com/ilustrografia.pl/'}
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaInstagram className='text-white' />
					</Link>
					<Link
						to={'https://www.facebook.com/ilustrografiaPL/'}
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaTiktok className='text-white' />
					</Link>{' '}
					<Link
						to='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaYoutube className='text-white' />
					</Link>
				</div>
				<div className='hidden lg:flex items-center gap-x-10'>
					<Link className='hover:border-b hover:border-black' to='/'>
						Home
					</Link>
					<Link
						className='hover:border-b hover:border-black'
						to='/illustrations'
					>
						Illustrations
					</Link>
					<Link className='hover:border-b hover:border-black' to='/projects'>
						Projects
					</Link>
					<Link to='/'>
						<img
							className='h-20 hover:-translate-y-1 hover:scale-105 duration-300'
							src={logo}
							alt='logo-ilustrografia'
						/>
					</Link>
					<Link className='hover:border-b hover:border-black' to='/shop'>
						Shop
					</Link>
					<Link className='hover:border-b hover:border-black' to='/about-us'>
						About
					</Link>
					<Link className='hover:border-b hover:border-black' to='/contact'>
						Contact
					</Link>
				</div>
				<div className='hidden lg:flex gap-x-3 w-30'>
					<Link className=' relative' to={'/cart'}>
						<GrCart />
						{cartItems.length > 0 && (
							<span className='absolute object-right-top -mr-6  bottom-2 left-2 '>
								<div className='inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white'>
									{cartItems.reduce(
										(acc: number, item: VariationCart) => acc + item.qty,
										0
									)}
								</div>
							</span>
						)}
					</Link>
					<div className='w-10 px-3'>
						{userInfo ? (
							<Dropdown userInfo={userInfo} handleLogout={handleLogout} />
						) : (
							<Link to={'/login'}>
								<FaUserAltSlash />
							</Link>
						)}
					</div>
					<GrFavorite />
				</div>

				{/* <div className="md:hidden"> */}
				<div className='lg:hidden'>
					<button
						id='menu-btn'
						onClick={handleClick}
						type='button'
						className={
							isActive
								? 'z-40 block hamburger lg:hidden focus:outline-none open'
								: 'z-40 block hamburger lg:hidden focus:outline-none'
						}
					>
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</div>

				{/* MOBILE MENU */}

				<div
					id='menu'
					className={
						isActive
							? 'absolute opacity-100 top-0 bottom-0 left-0 flex flex-col self-end items-center w-full min-h-screen py-1 pt-40 space-y-8 text-lg text-black uppercase bg-slate-100'
							: 'hidden'
					}
				>
					<Link to='/'>
						<img
							className='h-20 hover:-translate-y-1 hover:scale-105 duration-300'
							src={logo}
							alt='logo-ilustrografia'
						/>
					</Link>
					<div className='flex gap-x-3 items-center justify-center w-20'>
						<Link
							to='https://www.facebook.com/ilustrografiaPL/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaFacebook className='text-white' />
						</Link>
						<Link
							to='https://www.instagram.com/ilustrografia.pl/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaInstagram className='text-white' />
						</Link>
						<Link
							to='https://www.facebook.com/ilustrografiaPL/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaTiktok className='text-white' />
						</Link>{' '}
						<Link
							to='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaYoutube className='text-white' />
						</Link>
					</div>
					<div className='flex flex-col items-center gap-x-10'>
						<Link to='/'>Home</Link>
						<Link to='/illustrations'>Illustrations</Link>
						<Link to='/projects'>Projects</Link>

						<Link to='/shop'>Shop</Link>
						<Link to='/about-us'>About</Link>
						<Link to='/contact'>Contact</Link>
					</div>
					<div className='flex gap-x-3 w-20'>
						<Link to={'/cart'}>
							<GrCart />
						</Link>
						<Link to={'/login'}>
							<GrUser />
						</Link>
						<GrFavorite />
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header;

{
	/* <Link to={'/profile'}>{userInfo.name}</Link>
							<p className='hover:cursor-pointer' onClick={handleLogout}>
								Logout
							</p> */
}
