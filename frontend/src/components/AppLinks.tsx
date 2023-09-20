import { Link, useNavigate } from "react-router-dom"
import Dropdown from "./Dropdown"
import ThemeSwitcher from "./ThemeSwitcher"
import { FaUserAltSlash } from "react-icons/fa"
import { FaCartShopping, FaHeart } from "react-icons/fa6"
import { useAppDispatch, useAppSelector } from "../slices/reduxHooks"
import { useLogoutMutation } from "../slices/usersApiSlice"
import { logout } from "../slices/authSlice"
import { resetCart } from "../slices/cartSlice"
import { toast } from "react-toastify"
import { getError } from "../utils/utils"
import { ApiError } from "../types/ApiError"
import { VariationCart } from "../types/Product"

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

<div className={`${userInfo? 'bg-green-400' : 'bg-red-400' } text-ivory cursor-pointer rounded-3xl p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}>
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
</Link></>
  )
}
export default AppLinks