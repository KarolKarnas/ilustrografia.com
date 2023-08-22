import { createSlice } from '@reduxjs/toolkit';

const authData = localStorage.getItem('userInfo');
const initialState = authData ? {userInfo: JSON.parse(authData)} : { userInfo: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.userInfo = action.payload;
			localStorage.removeItem('userInfo')
		}
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;