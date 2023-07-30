import { GrCart, GrUser, GrFavorite } from 'react-icons/gr';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='w-full bg-slate-100 py-2'>
			<nav className='flex items-center justify-around'>
				<div className='flex gap-x-3 items-center w-20'>
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
				<div className='flex items-center gap-x-10'>
					<a href='/home'>Home</a>
					<a href='/illustrations'>Illustrations</a>
					<a href='/projects'>Projects</a>
					<a href='/home'>
						<img
							className='h-20 hover:-translate-y-1 hover:scale-105 duration-300'
							src='logo-ilustrografia.png'
							alt='logo-ilustrografia'
						/>
					</a>
					<a href='/shop'>Shop</a>
					<a href='/about-us'>About</a>
					<a href='/contact'>Contact</a>
				</div>
				<div className='flex gap-x-3 w-20'>
					<GrCart />
					<GrUser />
					<GrFavorite />
				</div>
			</nav>
		</header>
	);
};
export default Header;
