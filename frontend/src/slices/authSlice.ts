import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../types/User';

const authData = localStorage.getItem('userInfo');
const initialState: { userInfo: UserInfo | undefined } = authData
	? { userInfo: JSON.parse(authData) }
	: { userInfo: undefined };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<UserInfo>) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.userInfo = action.payload;
			localStorage.removeItem('userInfo');
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
