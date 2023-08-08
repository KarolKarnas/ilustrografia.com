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
import HomeScreen from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import IllustrationsPage from './pages/IllustrationsPage/IllustrationsPage';
// import CreaturePage from './pages/CreaturePage/CreaturePage';

// axios.defaults.baseURL =
// 	process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/';

const queryClient = new QueryClient()

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />}></Route>
			<Route path='/shop/:slug' element={<ProductPage />}></Route>
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
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
