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
import { FaCheck, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import Spinner from "../../components/Spinner";
import InputTextField from "../../components/Admin/InputTextField";
import Meta from "../../components/Meta";

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
    <>
      <Meta title="Admin · Update User · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />

      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="mb-8 flex h-48
     w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust md:mb-28"
        >
          <HeadingAccent>{user?.name}</HeadingAccent>
          <PageHeading>Update User</PageHeading>
          <IconDivider>
            <FaUserAlt className="text-xl md:text-2xl" />
          </IconDivider>
        </div>

        {isLoading || loadingUpdate ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : error ? (
          <Message variant="bad" message={getError(error as ApiError)} />
        ) : updateError ? (
          <Message variant="bad" message={getError(updateError as ApiError)} />  
        ) : user ? (
          <div className="flex w-full justify-center">
            <Form.Root
              className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3"
              onSubmit={(e) => handleSubmit(e)}
            >
              <InputTextField
                shortName={"userName"}
                name={"User Name"}
                onChangeFun={(e) => {
                  const newName = e.target.value;
                  setName(newName);
                }}
                value={name}
                required={true}
              />

              <InputTextField
                shortName={"userEmail"}
                name={"User Email"}
                onChangeFun={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required={true}
              />

              <div className="mt-2 flex items-center">
                <Checkbox.Root
                  className="mr-2 flex h-5 w-5 items-center justify-center rounded-lg border bg-white shadow-sm hover:cursor-pointer  hover:shadow-hero"
                  id="c1"
                  checked={isAdmin}
                  onCheckedChange={() => setIsAdmin(!isAdmin)}
                >
                  <Checkbox.Indicator>
                    <FaCheck className="text-xs" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label
                  className="font-montserrat text-black-magic dark:text-ivory"
                  htmlFor="c1"
                >
                  Is the user admin?
                </label>
              </div>

              <div className="fixed bottom-0 left-0  z-10 flex w-full flex-col gap-1 bg-ivory dark:bg-eerie-black md:static md:gap-4 md:bg-none">
                <button
                  onClick={handleSubmit}
                  className={` h-8 w-full border border-red-magic bg-red-magic/60   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs `}
                >
                  Save Changes
                </button>
                <Link to={"/admin/user-list"}>
                  <button
                    className={`
                              
                            h-8 w-full border border-black-magic bg-black-magic   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:border-red-magic hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs`}
                  >
                    Go Back
                  </button>
                </Link>{" "}
              </div>
            </Form.Root>
          </div>
        ) : (
          <div>No user found</div>
        )}
      </div>
    </>
  );
};

export default UserEditPage;
