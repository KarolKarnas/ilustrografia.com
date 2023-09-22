import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";

import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="mt-5 text-center text-3xl font-bold">Register</h1>
      <Form.Root className="w-4/12" onSubmit={(e) => handleSubmit(e)}>
        <Form.Field className="flex flex-col" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
              Name
            </Form.Label>
            <Form.Message
              className="text-md text-red-magic"
              match="valueMissing"
            >
              Please enter your name
            </Form.Message>
            <Form.Message
              className="text-md text-red-magic"
              match="typeMismatch"
            >
              Please provide a valid name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="flex flex-col" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
              Email
            </Form.Label>
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
              className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
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
            <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
              Password
            </Form.Label>
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
              className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="flex flex-col" name="confirmPassword">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
              Confirm Password
            </Form.Label>
            <Form.Message
              className="text-md text-red-magic"
              match="valueMissing"
            >
              Please confirm your password
            </Form.Message>
            <Form.Message
              className="text-md text-red-magic"
              match="typeMismatch"
            >
              Please confirm a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            // add disabled styling
            className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
            disabled={isLoading}
          >
            Register
          </button>
        </Form.Submit>
        {isLoading && <div>Loading...</div>}
      </Form.Root>
      <p>
        Already register?{" "}
        <Link
          className="text-red-700"
          to={redirect ? `/login?redirect=${redirect}` : "/login"}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
