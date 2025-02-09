import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { FaUserAlt } from "react-icons/fa";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import CheckoutSteps from "../../components/CheckoutSteps";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import PageHeading from "../../components/primitives/PageHeading";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import IconDivider from "../../components/primitives/IconDivider";
import InputTextField from "../../components/Admin/InputTextField";
import Spinner from "../../components/Spinner";
import Meta from "../../components/Meta";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useAppSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };
  return (
    <>
      <Meta title="Login · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />

      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
       h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-28 md:h-[330px] "
        >
          <img
            src="/images/shop/printings-images.jpg "
            alt=""
            className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
          />

          <div className="absolute flex flex-col items-center justify-center">
            <HeadingAccent>· Ilustrografia ·</HeadingAccent>
            <PageHeading>Login</PageHeading>
            <IconDivider>
              <FaUserAlt className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>

        <CheckoutSteps step1={true} step2={false} step3={false} step4={false} />
        <Form.Root
          className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputTextField
            shortName={"email"}
            name={"Email"}
            onChangeFun={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required={true}
          />

          <InputTextField
            shortName={"password"}
            name={"Password"}
            onChangeFun={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required={true}
          />
          <Form.Submit asChild>
            <ButtonSubmit>Login</ButtonSubmit>
          </Form.Submit>
          {isLoading && (
            <div className="flex justify-center">
              {" "}
              <Spinner />
            </div>
          )}
        </Form.Root>
        <p className="mt-5 font-montserrat text-sm font-semibold text-black-magic  dark:text-ivory">
          New customer?{" "}
          <Link
            className="text-red-magic"
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
