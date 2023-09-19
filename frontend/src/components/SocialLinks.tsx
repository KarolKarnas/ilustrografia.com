import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';


const SocialLinks = () => {
  return (
    <>	<Link
    className='transition ease-in-out bg-red-400 bg-opacity-60 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
    to={'https://www.facebook.com/ilustrografiaPL/'}
  >
    <FaFacebook className='text-white' />
  </Link>
  <Link
    to={'https://www.instagram.com/ilustrografia.pl/'}
    className='transition ease-in-out bg-red-400 bg-opacity-60 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
  >
    <FaInstagram className='text-white' />
  </Link>
  <Link
    to={'https://www.facebook.com/ilustrografiaPL/'}
    className='transition ease-in-out bg-red-400 bg-opacity-60 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
  >
    <FaTiktok className='text-white' />
  </Link>{' '}
  <Link
    to='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
    className='transition ease-in-out bg-red-400 bg-opacity-60 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
  >
    <FaYoutube className='text-white' />
  </Link></>
  )
}
export default SocialLinks


// (
  //   <>	<Link
  //   className='transition ease-in-out bg-[#3b5998] p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
  //   to={'https://www.facebook.com/ilustrografiaPL/'}
  // >
  //   <FaFacebook className='text-white' />
  // </Link>
  // <Link
  //   to={'https://www.instagram.com/ilustrografia.pl/'}
  //   className='transition ease-in-out bg-gradient-to-b from-amber-500 to-pink-500 p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300'
  // >
  //   <FaInstagram className='text-white' />
  // </Link>
  // <Link
  //   to={'https://www.facebook.com/ilustrografiaPL/'}
  //   className='transition ease-in-out  bg-eerie-black p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-aberration'
  // >
  //   <FaTiktok className='text-white' />
  // </Link>{' '}
  // <Link
  //   to='https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng'
  //   className='transition ease-in-out bg-[#c4302b] p-2 rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300 '
  // >
  //   <FaYoutube className='text-white' />
  // </Link></>
  // )