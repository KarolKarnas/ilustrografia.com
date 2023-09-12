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
		<div className='flex flex-col justify-between overflow-hidden min-h-screen'>

			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<Header />
			<main className=' flex flex-col flex-auto min-w-screen items-center justify-start'>
				<Outlet />
			</main>
			<Footer />

		</div>
	);
};
export default App;
