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
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ShippingPage from './pages/ShippingPage/ShippingPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage';
import OrderDetailsPage from './pages/OrderDetailsPage/OrderDetailsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import OrderListPage from './pages/Admin/OrderListPage';
import ProductListPage from './pages/Admin/ProductListPage'; 
import ProductEditScreen from './pages/Admin/ProductEditPage';
import UserListPage from './pages/Admin/UserListPage';
import UserEditPage from './pages/Admin/UserEditPage';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomePage />} />
			<Route path='/shop/:slug' element={<ProductPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegistrationPage />} />
			<Route path='' element={<PrivateRoute />}>
				<Route path='/shipping' element={<ShippingPage />} />
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/place-order' element={<PlaceOrderPage />} />
				<Route path='/order/:id' element={<OrderDetailsPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Route>
			<Route path='' element={<AdminRoute />}>
				<Route path='/admin/order-list' element={<OrderListPage />} />
				<Route path='/admin/product-list' element={<ProductListPage />} />
				<Route path='/admin/product-list/:slug/edit' element={<ProductEditScreen />} />
				<Route path='/admin/user-list' element={<UserListPage />} />
				<Route path='/admin/user-list/:id/edit' element={<UserEditPage />} />
			</Route>

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
			<PayPalScriptProvider
				deferLoading={true}
				options={{
					clientId: 'test',
				}}
			>
				<RouterProvider router={router} />
			</PayPalScriptProvider>
		</Provider>
	</React.StrictMode>
);
