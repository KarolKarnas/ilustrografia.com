import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { setCredentials } from "../../slices/authSlice";

import { useUpdateProfileMutation } from "../../slices/usersApiSlice";
import { useGetMyOrdersQuery } from "../../slices/ordersApiSlice";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import InputTextField from "../../components/Admin/InputTextField";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import MainStrongText from "../../components/primitives/MainStrongText";
import Spinner from "../../components/Spinner";
import Message from "../../components/Message";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile, error }] =
    useUpdateProfileMutation();

  const { data: orders, isLoading, isError } = useGetMyOrdersQuery();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else if (userInfo) {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile updated");
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
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
          <PageHeading>Profile</PageHeading>
          <IconDivider>
            <FaUserAlt className="text-xl md:text-2xl" />
          </IconDivider>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : isError ? (
        <Message variant="bad" message={getError(error as ApiError)} />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-8 xl:flex-row  xl:items-start">
          <Form.Root
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-5/12 "
          >
            {loadingUpdateProfile && (
              <div className="flex justify-center">
                <Spinner />
              </div>
            )}
            <div className="mx-auto -mb-5">
              <MainStrongText>Update Profile</MainStrongText>
            </div>

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
              name={"New Password"}
              onChangeFun={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required={false}
            />
            <InputTextField
              shortName={"confirmPassword"}
              name={"Confirm New Password"}
              onChangeFun={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              required={false}
            />
            <Form.Submit asChild>
              <ButtonSubmit>Update</ButtonSubmit>
            </Form.Submit>
          </Form.Root>

          <div className="flex w-full flex-col gap-5 overflow-x-auto ">
            <MainStrongText>All {userInfo?.name} Orders</MainStrongText>
            <table className="min-w-full  border text-center text-sm font-light text-black-magic dark:border-neutral-700 dark:text-ivory">
              <thead className="border-b font-montserrat font-semibold dark:border-neutral-700 dark:bg-black-magic ">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Paid
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-700"
                  >
                    Delivered
                  </th>
                  <th scope="col" className="px-6 py-4 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order, index) => (
                    <tr
                      key={index}
                      className={`border-b dark:border-neutral-700 ${
                        index % 2 === 0 ? "bg-white dark:bg-angel-space" : ""
                      }`}
                    >
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order._id}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        ${order.totalPrice.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.isPaid ? (
                          order.paidAt?.substring(0, 10)
                        ) : (
                          <FaTimes className="mx-auto text-red-magic" />
                        )}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        {order.isDelivered ? (
                          order.deliveredAt?.substring(0, 10)
                        ) : (
                          <FaTimes className="mx-auto text-red-magic" />
                        )}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                        <Link
                          to={`/order/${order._id}`}
                          className="text-red-magic underline transition-colors duration-500 hover:text-eerie-black"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
