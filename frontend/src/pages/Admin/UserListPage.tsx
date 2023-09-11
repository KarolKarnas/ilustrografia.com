import { useEffect, useState } from 'react';
import {
	useGetUsersQuery,
	useDeleteUserMutation,
} from '../../slices/usersApiSlice';
import { toCheckUsers } from '../../utils/typeCheck';
import { UserInfo } from '../../types/User';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { getError } from '../../utils/utils';
import { toast } from 'react-toastify';
import { ApiError } from '../../types/ApiError';

const UserListPage = () => {
	const [users, setUsers] = useState<UserInfo[]>([]);
	const { data, isLoading, error, refetch } = useGetUsersQuery({});
	console.log(users);

	const [deleteUser] = useDeleteUserMutation();

	useEffect(() => {
		if (!isLoading) {
			const typedUsers: UserInfo[] = toCheckUsers(data);
			// console.log(typedUsers);
			setUsers(typedUsers);
		}
	}, [isLoading]);
	// }, [isLoading, loadingCreate]);

	const handleDeleteUser = async (id: string) => {
		if (window.confirm('Are you sure you want to delete the user?')) {
			try {
				await deleteUser(id).unwrap();
				const updatedUsers = await refetch();
				setUsers(toCheckUsers(updatedUsers.data));
				toast.success(`User deleted successfully`);
			} catch (error) {
				toast.error(getError(error as ApiError));
			}
		}
	};

	return (
		<div className='w-3/4'>
			<div className='flex justify-between'>
				<h1 className='text-2xl text-zinc-400'>Users List</h1>
			</div>

			<div className='flex flex-col mt-4 w-full'>
				{/* {loadingDelete && <div>Loading...</div>} */}

				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						{' '}
						{users &&
							users.map((user: UserInfo, index) => (
								<div
									key={index}
									className={`${
										index % 2 === 0 ? 'bg-red-100' : ''
									} flex flex-col mb-10 border`}
								>
									<div className='flex gap-1'>
										{' '}
										<div className='basis-3/12 font-bold'>ID</div>
										<div className='basis-1/12 font-bold'>NAME</div>
										<div className='basis-3/12 font-bold'>EMAIL</div>
										<div className='basis-1/12 font-bold'>ADMIN</div>
										<div className='basis-4/12 font-bold'>EDIT/DELETE</div>
									</div>
									<div className='flex gap-1'>
										{' '}
										<div className='basis-3/12'>{user._id}</div>
										<div className='basis-1/12'>{user.name}</div>
										<div className='basis-3/12'>{user.email}</div>
										<div className='basis-1/12'>
											{user.isAdmin ? (
												<FaCheck className='text-green-400' />
											) : (
												<FaTimes className='text-red-400' />
											)}
										</div>
										<div className='basis-4/12 flex gap-2'>
											<Link
												to={`/admin/user-list/${user._id}/edit`}
												className='hover:text-red-300 hover:cursor-pointer'
											>
												<FaEdit />
											</Link>{' '}
											<FaTrash
												onClick={() => handleDeleteUser(user._id)}
												className='hover:text-red-300 hover:cursor-pointer text-red-500'
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
