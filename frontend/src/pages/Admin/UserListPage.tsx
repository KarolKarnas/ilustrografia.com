import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";
import { UserInfo } from "../../types/User";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaCheck, FaTimes, FaListUl } from "react-icons/fa";
import { getError } from "../../utils/utils";
import { toast } from "react-toastify";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import Spinner from "../../components/Spinner";
import Message from "../../components/Message";
import Meta from "../../components/Meta";

const UserListPage = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id: string) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      try {
        await deleteUser(id).unwrap();
        refetch();
        toast.success(`User deleted successfully`);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
    <>
      <Meta title="Admin · User List · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />

      <div className="flex w-11/12 flex-col">
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
            <HeadingAccent>· Admin ·</HeadingAccent>
            <PageHeading>User List</PageHeading>
            <IconDivider>
              <FaListUl className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>
        {isLoading ? (
          <div className="flex w-full justify-center">
            <Spinner></Spinner>
          </div>
        ) : error ? (
          <Message variant="bad" message={getError(error as ApiError)} />
        ) : (
          <div className="mt-4 flex w-full flex-col">
            <div className=" overflow-x-auto  shadow-hero">
              <table className=" min-w-full  border text-center text-sm font-light text-black-magic dark:border-neutral-700 dark:text-ivory   ">
                <thead className="border-b font-montserrat font-semibold dark:border-neutral-700 ">
                  <tr className="dark:bg-black-magic">
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-700"
                    >
                      E-mail
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-700"
                    >
                      Admin
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Edit/Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user: UserInfo, index) => (
                      <tr
                        key={index}
                        className={`border-b dark:border-neutral-700 ${
                          index % 2 === 0 ? "bg-white dark:bg-angel-space" : ""
                        }`}
                      >
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {user._id}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          {user.isAdmin ? (
                            <FaCheck className="mx-auto text-green-400" />
                          ) : (
                            <FaTimes className="mx-auto text-red-magic" />
                          )}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-700">
                          <span className="flex justify-center gap-3">
                            <Link
                              to={`/admin/user-list/${user._id}/edit`}
                              className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
                            >
                              <FaEdit />
                            </Link>{" "}
                            <div
                              data-testid="delete"
                              className="cursor-pointer rounded-3xl bg-red-magic p-2 text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
                              onClick={() => handleDeleteUser(user._id)}
                            >
                              <FaTrash />
                            </div>
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default UserListPage;
