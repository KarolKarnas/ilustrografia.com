import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
     providesTags: ['Products'],
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (slug) => ({
				url: `${PRODUCTS_URL}/${slug}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: `${PRODUCTS_URL}`,
				method: 'POST',
			}),
			invalidatesTags: ['Product'],
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productSlug}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Products', 'Product'],
		 }),
		 uploadProductImage: builder.mutation({
			query: (data) => ({
				url: `${UPLOAD_URL}`,
				method: 'POST',
				body: data,
			}),
		}),
		 deleteProduct: builder.mutation({
			query: (slug) => ({
				url: `${PRODUCTS_URL}/${slug}`,
				method: 'DELETE'
			}),
		}),
		createProductReview: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.slug}/reviews`,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Product'],
		}),
	}),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUpdateProductMutation, useUploadProductImageMutation, useDeleteProductMutation, useCreateProductReviewMutation } =
	productsApiSlice;
