import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
// import ProductGroup from './components/ProductGroup';
// import projects from './products';
const App = () => {
	
	// console.log(projects);
	return (
		<div className='flex flex-col items-center justify-between min-h-screen overflow-hidden'>
			<Header />
			<main>
			<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default App;
