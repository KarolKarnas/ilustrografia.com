import { apiSlice } from './apiSlice';
import { ORDERS_URL, PAYPAL_URL } from '../constants';
import { Order, OrderData } from '../types/Order';

export const ordersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation<Order, OrderData>({
			query: (order) => ({
				url: ORDERS_URL,
				method: 'POST',
				body: { ...order },
			}),
		}),
		getOrderDetails: builder.query<Order, string>({
			query: (orderId) => ({
				url: `${ORDERS_URL}/${orderId}`,
			}),
		}),
		payOrder: builder.mutation({
			query: ({ orderId, details }) => ({
				url: `${ORDERS_URL}/${orderId}/pay`,
				method: 'PUT',
				body: details,
			}),
		}),
		getPaypalClientId: builder.query({
			query: () => ({
				url: PAYPAL_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getMyOrders: builder.query<Order[], void>({
			query: () => ({
				url: `${ORDERS_URL}/my`,
			}),
			keepUnusedDataFor: 5,
		}),
		getAllOrders: builder.query<Order[], void>({
			query: () => ({
				url: `${ORDERS_URL}`,
			}),
			keepUnusedDataFor: 5,
		}),
		deliverOrder: builder.mutation<Order, string>({
			query: (orderId) => ({
				url: `${ORDERS_URL}/${orderId}/deliver`,
				method: 'PUT',
			}),
		}),
	}),
});

export const {
	useCreateOrderMutation,
	useGetOrderDetailsQuery,
	usePayOrderMutation,
	useGetPaypalClientIdQuery,
	useGetMyOrdersQuery,
	useGetAllOrdersQuery,
	useDeliverOrderMutation
} = ordersApiSlice;
