import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";
import { UserInfo } from "../../types/User";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { getError } from "../../utils/utils";
import { toast } from "react-toastify";
import { ApiError } from "../../types/ApiError";

const UserListPage = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  console.log(users);

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
    <div className="w-3/4">
      <div className="flex justify-between">
        <h1 className="text-2xl text-zinc-400">Users List</h1>
      </div>

      <div className="mt-4 flex w-full flex-col">
        {/* {loadingDelete && <div>Loading...</div>} */}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {" "}
            {users &&
              users.map((user: UserInfo, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-red-100" : ""
                  } mb-10 flex flex-col border`}
                >
                  <div className="flex gap-1">
                    {" "}
                    <div className="basis-3/12 font-bold">ID</div>
                    <div className="basis-1/12 font-bold">NAME</div>
                    <div className="basis-3/12 font-bold">EMAIL</div>
                    <div className="basis-1/12 font-bold">ADMIN</div>
                    <div className="basis-4/12 font-bold">EDIT/DELETE</div>
                  </div>
                  <div className="flex gap-1">
                    {" "}
                    <div className="basis-3/12">{user._id}</div>
                    <div className="basis-1/12">{user.name}</div>
                    <div className="basis-3/12">{user.email}</div>
                    <div className="basis-1/12">
                      {user.isAdmin ? (
                        <FaCheck className="text-green-400" />
                      ) : (
                        <FaTimes className="text-red-magic" />
                      )}
                    </div>
                    <div className="flex basis-4/12 gap-2">
                      <Link
                        to={`/admin/user-list/${user._id}/edit`}
                        className="hover:cursor-pointer hover:text-red-300"
                      >
                        <FaEdit />
                      </Link>{" "}
                      <FaTrash
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-red-500 hover:cursor-pointer hover:text-red-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
export default UserListPage;
