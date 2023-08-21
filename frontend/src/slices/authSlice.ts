import { createSlice } from '@reduxjs/toolkit';

const authData = localStorage.getItem('userInfo');
const initialState = authData ? JSON.parse(authData) : { userInfo: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem('userInfo', JSON.stringify(action.payload));
		},
	},
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
