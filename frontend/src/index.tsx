import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./slices/store";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ShippingPage from "./pages/ShippingPage/ShippingPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OrderListPage from "./pages/Admin/OrderListPage";
import ProductListPage from "./pages/Admin/ProductListPage";
import ProductEditScreen from "./pages/Admin/ProductEditPage";
import UserListPage from "./pages/Admin/UserListPage";
import UserEditPage from "./pages/Admin/UserEditPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import IllustrationsPage from "./pages/IllustrationsPage/IllustrationsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import IllustrationPage from "./pages/IllustrationPage/IllustrationPage";
import NeoSlavicCensus from "./pages/ProjectPage/NeoSlavicCensus";
import FantasyIllustrations from "./pages/ProjectPage/FantasyIllustrations";
import PolishLegendsCharacters from "./pages/ProjectPage/PolishLegendsCharacters";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/shop/:slug" element={<ProductPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/illustrations" element={<IllustrationsPage />} />
      <Route path="/illustrations/:slug" element={<IllustrationPage />} />
      <Route
        path="/projects/neo-slavic-census"
        element={<NeoSlavicCensus />}
      />
      <Route
        path="/projects/fantasy-illustrations"
        element={<FantasyIllustrations />}
      />
      <Route
        path="/projects/polish-legends-characters"
        element={<PolishLegendsCharacters />}
      />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/place-order" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/order-list" element={<OrderListPage />} />
        <Route path="/admin/product-list" element={<ProductListPage />} />
        <Route
          path="/admin/product-list/:slug/edit"
          element={<ProductEditScreen />}
        />
        <Route path="/admin/user-list" element={<UserListPage />} />
        <Route path="/admin/user-list/:id/edit" element={<UserEditPage />} />
      </Route>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider
        deferLoading={true}
        options={{
          clientId: "test",
        }}
      >
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
