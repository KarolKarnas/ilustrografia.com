import { useAppDispatch, useAppSelector } from "../slices/reduxHooks";
import { useNavigate } from "react-router-dom";
import { VariationCart } from "../types/Product";

import {
  FaUserAltSlash,
  FaUserAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

import { IconContext } from "react-icons/lib";

import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/logo-ilustrografia.png";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import Dropdown from "./Dropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import { toast } from "react-toastify";
import { getError } from "../utils/utils";
import { ApiError } from "../types/ApiError";
import { resetCart } from "../slices/cartSlice";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const { cartItems } = useAppSelector((state) => state.cart);

  // console.log(cartItems)
  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutApiCall(null).unwrap();
      dispatch(logout(null));
      dispatch(resetCart());
      navigate("/login");
      toast.success(`${res.message}`);
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };
  // dark:hover:text-red-200

  return (
    <header className="bg-red-50 dark:bg-eerie-black dark:text-ivory  w-full py-4 transition-colors    duration-500">
      <nav className="flex items-center justify-evenly">
        <div className="hidden w-30 items-center gap-x-3 lg:flex">
          <SocialLinks />
        </div>
        <div className="hidden items-center gap-x-4 lg:gap-x-10 lg:flex">
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/illustrations"
          >
            Illustrations
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/projects"
          >
            Projects
          </Link>
          <Link to="/">
            <img
              className="h-20 duration-300 hover:-translate-y-1 hover:scale-105"
              src={logo}
              alt="logo-ilustrografia"
            />
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/about-us"
          >
            About
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="w-30 hidden gap-x-3 lg:flex lg:items-center">
          <ThemeSwitcher />

          <div className="bg-red-400 text-ivory cursor-pointer rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            {userInfo ? (
              <Dropdown userInfo={userInfo} handleLogout={handleLogout} />
            ) : (
              <Link to={"/login"}>
                <FaUserAltSlash />
              </Link>
            )}
          </div>

          <Link
            to={"/favorite"}
            className="bg-red-400 text-ivory cursor-pointer rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <FaHeart />
          </Link>
          <Link
            className=" bg-red-400 text-ivory relative rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            to={"/cart"}
          >
            <FaCartShopping />
            {cartItems.length > 0 && (
              <span className="absolute bottom-5 left-5  -mr-6 object-right-top ">
                <div className=" bg-red-600 text-white inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-semibold leading-4">
                  {cartItems.reduce(
                    (acc: number, item: VariationCart) => acc + item.qty,
                    0,
                  )}
                </div>
              </span>
            )}
          </Link>
        </div>

        {/* <div className="md:hidden"> */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            onClick={handleClick}
            type="button"
            className={
              isActive
                ? "hamburger open z-40 block focus:outline-none lg:hidden"
                : "hamburger z-40 block focus:outline-none lg:hidden"
            }
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* MOBILE MENU */}

        <div
          id="menu"
          className={
            isActive
              ? "bg-slate-100 text-black absolute bottom-0 left-0 top-0 flex min-h-screen w-full flex-col items-center space-y-8 self-end py-1 pt-40 text-lg uppercase opacity-100"
              : "hidden"
          }
        >
          <Link to="/">
            <img
              className="h-20 duration-300 hover:-translate-y-1 hover:scale-105"
              src={logo}
              alt="logo-ilustrografia"
            />
          </Link>
          <div className="flex w-20 items-center justify-center gap-x-3">
            <Link
              to="https://www.facebook.com/ilustrografiaPL/"
              className="bg-red-300 rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaFacebook className="text-white" />
            </Link>
            <Link
              to="https://www.instagram.com/ilustrografia.pl/"
              className="bg-red-300 rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaInstagram className="text-white" />
            </Link>
            <Link
              to="https://www.facebook.com/ilustrografiaPL/"
              className="bg-red-300 rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaTiktok className="text-white" />
            </Link>{" "}
            <Link
              to="https://www.youtube.com/channel/UCH4ljdai9HnOYcKVHWnJ6ng"
              className="bg-red-300 rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaYoutube className="text-white" />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-x-10">
            <Link to="/">Home</Link>
            <Link to="/illustrations">Illustrations</Link>
            <Link to="/projects">Projects</Link>

            <Link to="/shop">Shop</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex w-20 gap-x-3">
            <Link to={"/cart"}>
              <FaCartShopping />
            </Link>
            <Link to={"/login"}>
              <FaUserAlt />
            </Link>
            <FaHeart />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

{
  /* <Link to={'/profile'}>{userInfo.name}</Link>
							<p className='hover:cursor-pointer' onClick={handleLogout}>
								Logout
							</p> */
}
