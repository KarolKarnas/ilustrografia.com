import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';

import { Provider } from 'react-redux';
import store from './store';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomePage />}></Route>
			<Route path='/shop/:slug' element={<ProductPage />}></Route>
			<Route path='cart' element={<CartPage />}></Route>
			{/* <Route index={true} path='/illustrations' element={<IllustrationsPage />}></Route>
			<Route
				path='/shop/:project/:creature/:product'
				element={<ProductPage />}
			></Route>
			<Route
				path='/projects/:project/:creature/'
				element={<CreaturePage />}
			></Route> */}
		</Route>
	)
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
