import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProductGroup from './components/ProductGroup';
// import projects from './products';
const App = () => {
	
	// console.log(projects);
	return (
		<div className='flex flex-col justify-between min-h-screen overflow-hidden'>
			<ToastContainer />
			<Header />
			<main className=' min-w-screen min-h-screen flex flex-col items-center justify-start'>
			<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default App;
