import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';
import { UserInfo, UserOrderPassword } from '../types/User';

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<UserInfo, {email: string, password: string}>({
			query: (data) => ({
				url: `${USERS_URL}/auth`,
				method: 'POST',
				body: data,
			}),
		}),
		register: builder.mutation<UserInfo, {name: string, email: string, password: string}>({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: 'POST',
				body: data,
			}),
		}),
		// logout: builder.mutation<{message: string}, null>({
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: 'POST',
			}),
		}),
		updateProfile: builder.mutation<UserInfo, UserOrderPassword>({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: 'PUT',
				body: data,
			}),
		}),
		getUsers: builder.query<UserInfo[], void>({
			query: () => ({
				url: USERS_URL,
			}),
			providesTags: ['Users'],
			keepUnusedDataFor: 5,
		}),
		deleteUser: builder.mutation<UserInfo, string>({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
				method: 'DELETE'
			}),
		}),
		updateUser: builder.mutation<UserInfo, UserInfo>({
			query: (data) => ({
				url: `${USERS_URL}/${data._id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		getUserDetails: builder.query<UserInfo, string>({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useUpdateProfileMutation,
	useGetUsersQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
  useGetUserDetailsQuery,
} = usersApiSlice;
