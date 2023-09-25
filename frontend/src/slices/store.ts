import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import cartSliceReducer from './cartSlice';
import authSliceReducer from './authSlice';
import themeSliceReducer from './themeSlice'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		cart: cartSliceReducer,
		auth: authSliceReducer,
		theme: themeSliceReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

// console.log(store.getState())

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
