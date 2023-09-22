import { Link, useParams } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from "../../slices/usersApiSlice";
import { useState, useEffect, SyntheticEvent } from "react";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import Message from "../../components/Message";

import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const UserEditPage = () => {
  const { id } = useParams();

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  if (!id) {
    return <div>No id provided</div>;
  }

  const { data: user, isLoading, refetch, error } = useGetUserDetailsQuery(id);

  const [updateUser, { isLoading: loadingUpdate, error: updateError }] =
    useUpdateUserMutation();

  useEffect(() => {
    if (!isLoading && user) {
      setUserId(user._id);
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      setName("");
      return toast.error("Just empty spaces here...");
    }

    try {
      await updateUser({ _id: userId, name, email, isAdmin }).unwrap();
      refetch();
      toast.success("user updated successfully");
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="mt-5 text-center text-3xl font-bold">Edit Product</h1>{" "}
      <Link to={"/admin/user-list"}>
        <button
          className={`
            
             my-2 bg-zinc-900 px-32
           py-1 text-white  hover:bg-red-200`}
        >
          Go Back
        </button>
      </Link>{" "}
      {loadingUpdate && <div>Loading...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <Message variant="bad" message={getError(error as ApiError)} />
      ) : user ? (
        <div className="flex w-full justify-center">
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
                ></Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
                  type="text"
                  required
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    const newName = e.target.value;

                    setName(newName);
                  }}
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
                  Enter correct email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
                  type="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Control>
            </Form.Field>
            <div className="mt-2 flex items-center">
              <Checkbox.Root
                className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg border bg-white shadow-xl hover:cursor-pointer hover:bg-red-100 hover:shadow-sm"
                id="c1"
                checked={isAdmin}
                onCheckedChange={() => setIsAdmin(!isAdmin)}
              >
                <Checkbox.Indicator>
                  <FaCheck />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-black" htmlFor="c1">
                Are you admin Madame/Sir?
              </label>
            </div>

            <Form.Submit asChild>
              <button
                // add disabled styling
                className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
                disabled={isLoading}
              >
                Update
              </button>
            </Form.Submit>
            {isLoading && <div>Loading...</div>}
          </Form.Root>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default UserEditPage;
