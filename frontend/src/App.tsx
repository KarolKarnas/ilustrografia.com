import { useEffect } from "react";
import { useAppDispatch } from "./slices/reduxHooks";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "./slices/authSlice";
import GoToTop from "./components/GoToTop";
// import ProductGroup from './components/ProductGroup';
// import projects from './products';

type Props = {
  test?: boolean;
};

const App = ({ test }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > Number(expirationTime)) {
        dispatch(logout(null));
      }
    }
  }, [dispatch]);

  return (
    // <div className="flex min-h-screen flex-col justify-between overflow-hidden">
    <>
     {test ? null : <ScrollRestoration />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main className=" min-w-screen flex min-h-[60vh] flex-auto flex-col items-center overflow-clip pb-20 pt-4 md:pt-8 ">
        <Outlet />
        <GoToTop />
      </main>
      <Footer />
    </>
  );
};
export default App;
