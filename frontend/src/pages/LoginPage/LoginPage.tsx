import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";

import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import CheckoutSteps from "../../components/CheckoutSteps";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import PageHeading from "../../components/primitives/PageHeading";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";

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
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };
  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
      <CheckoutSteps step1={true} step2={false} step3={false} step4={false} />
      <PageHeading>Login</PageHeading>

      <Form.Root
        className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Field className="flex flex-col" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Message
              className="text-md text-red-magic"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-md text-red-magic"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="form-input"
              type="email"
              required
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="flex flex-col" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Message
              className="text-md text-red-magic"
              match="valueMissing"
            >
              Please enter your password
            </Form.Message>
            <Form.Message
              className="text-md text-red-magic"
              match="typeMismatch"
            >
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="form-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <ButtonSubmit>Login</ButtonSubmit>
        </Form.Submit>
        {isLoading && <div>Loading...</div>}
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
  );
};

export default LoginPage;
