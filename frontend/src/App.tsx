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
		<div className='flex flex-col justify-between overflow-hidden h-screen'>
			<ToastContainer />
			<Header />
			<main className=' min-w-screen h-5/6  flex flex-col items-center justify-center'>
			<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default App;
