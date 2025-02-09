import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaUserAltSlash } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../slices/reduxHooks";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import { toast } from "react-toastify";
import { getError } from "../utils/utils";
import { ApiError } from "../types/ApiError";
import { VariationCart } from "../types/Product";

const AppLinks = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

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

  return (
    <>
      <ThemeSwitcher />

      {userInfo ? (
        <Dropdown userInfo={userInfo} handleLogout={handleLogout} />
      ) : (
        <Link
          to={"/login"}
          className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
          id="login"
        >
          <FaUserAltSlash />
        </Link>
      )}
      <Link
        className=" relative rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
        to={"/cart"}
      >
        <FaCartShopping />
        {cartItems.length > 0 && (
          <span className="absolute bottom-5 left-5  -mr-6 object-right-top ">
            <div className=" inline-flex items-center rounded-full bg-red-600 px-1 py-0.5  text-xs font-semibold leading-4 text-white">
              {cartItems.reduce(
                (acc: number, item: VariationCart) => acc + item.qty,
                0,
              )}
            </div>
          </span>
        )}
      </Link>
    </>
  );
};
export default AppLinks;
