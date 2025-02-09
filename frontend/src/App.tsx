import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./slices/reduxHooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "./slices/authSlice";
import GoToTop from "./components/GoToTop";

type AppProps = {
  test?: boolean;
};

const App = ({ test }: AppProps) => {
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

  const activeTheme = useAppSelector((state) => state.theme);

  return (
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
        theme={activeTheme === "light" ? "light" : "dark"}
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
