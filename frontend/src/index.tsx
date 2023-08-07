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
import reportWebVitals from './reportWebVitals';
import HomeScreen from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
// import IllustrationsPage from './pages/IllustrationsPage/IllustrationsPage';
// import CreaturePage from './pages/CreaturePage/CreaturePage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />}></Route>
			<Route
				path='/shop/:slug'
				element={<ProductPage />}
			></Route>
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
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
