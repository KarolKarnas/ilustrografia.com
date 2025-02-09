import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";

import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import { FaUserAltSlash } from "react-icons/fa";
import InputTextField from "../../components/Admin/InputTextField";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import MainStrongText from "../../components/primitives/MainStrongText";
import Meta from "../../components/Meta";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

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
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success(`Welcome to Team Ilustrografia ${name}!`);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };
  return (
    <>
      <Meta title="Register · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
     h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-20 md:h-[330px] "
        >
          <img
            src="/images/shop/printings-images.jpg "
            alt=""
            className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
          />

          <div className="absolute flex flex-col items-center justify-center">
            <HeadingAccent>· Ilustrografia ·</HeadingAccent>
            <PageHeading>Register</PageHeading>
            <IconDivider>
              <FaUserAltSlash className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>

        <MainStrongText>Register New Profile</MainStrongText>
        <Form.Root
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-5/12 "
        >
          <InputTextField
            shortName={"name"}
            name={"Name"}
            onChangeFun={(e) => setName(e.target.value)}
            value={name}
            required={true}
          />
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
            required={false}
          />
          <InputTextField
            shortName={"confirmPassword"}
            name={"Confirm Password"}
            onChangeFun={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            required={false}
          />
          <Form.Submit asChild>
            <ButtonSubmit>Register</ButtonSubmit>
          </Form.Submit>
          {/* {isLoading && <div>Loading...</div>} */}
        </Form.Root>

        <p className="mt-5 font-montserrat text-sm font-semibold text-black-magic  dark:text-ivory">
          Already register?{" "}
          <Link
            className="text-red-magic"
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationPage;
