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
			const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem('expirationTime', expirationTime.toString());
		},
		logout: (state, action) => {
			state.userInfo = action.payload;
			localStorage.clear();
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
