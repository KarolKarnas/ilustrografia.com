import { GrCart, GrUser, GrFavorite } from 'react-icons/gr';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

import { useState } from 'react';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<header className='w-full bg-slate-100 py-2'>
			<nav className='flex items-center justify-around'>
				<div className='hidden lg:flex gap-x-3 items-center w-20'>
					<a
						href='https://www.facebook.com/ilustrografiaPL/'
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaFacebook className='text-white' />
					</a>
					<a
						href='https://www.instagram.com/ilustrografia.pl/'
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaInstagram className='text-white' />
					</a>
					<a
						href='https://www.facebook.com/ilustrografiaPL/'
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaTiktok className='text-white' />
					</a>{' '}
					<a
						href='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
						className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
					>
						<FaYoutube className='text-white' />
					</a>
				</div>
				<div className='hidden lg:flex items-center gap-x-10'>
					<a className='hover:border-b hover:border-black' href='/home'>
						Home
					</a>
					<a
						className='hover:border-b hover:border-black'
						href='/illustrations'
					>
						Illustrations
					</a>
					<a className='hover:border-b hover:border-black' href='/projects'>
						Projects
					</a>
					<a href='/home'>
						<img
							className='h-20 hover:-translate-y-1 hover:scale-105 duration-300'
							src='logo-ilustrografia.png'
							alt='logo-ilustrografia'
						/>
					</a>
					<a className='hover:border-b hover:border-black' href='/shop'>
						Shop
					</a>
					<a className='hover:border-b hover:border-black' href='/about-us'>
						About
					</a>
					<a className='hover:border-b hover:border-black' href='/contact'>
						Contact
					</a>
				</div>
				<div className='hidden lg:flex gap-x-3 w-20'>
					<GrCart />
					<GrUser />
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
					<a href='/home'>
						<img
							className='h-20 hover:-translate-y-1 hover:scale-105 duration-300'
							src='logo-ilustrografia.png'
							alt='logo-ilustrografia'
						/>
					</a>
					<div className='flex gap-x-3 items-center justify-center w-20'>
						<a
							href='https://www.facebook.com/ilustrografiaPL/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaFacebook className='text-white' />
						</a>
						<a
							href='https://www.instagram.com/ilustrografia.pl/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaInstagram className='text-white' />
						</a>
						<a
							href='https://www.facebook.com/ilustrografiaPL/'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaTiktok className='text-white' />
						</a>{' '}
						<a
							href='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
							className='transition ease-in-out bg-red-300 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
						>
							<FaYoutube className='text-white' />
						</a>
					</div>
					<div className='flex flex-col items-center gap-x-10'>
						<a href='/home'>Home</a>
						<a href='/illustrations'>Illustrations</a>
						<a href='/projects'>Projects</a>

						<a href='/shop'>Shop</a>
						<a href='/about-us'>About</a>
						<a href='/contact'>Contact</a>
					</div>
					<div className='flex gap-x-3 w-20'>
						<GrCart />
						<GrUser />
						<GrFavorite />
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header;
