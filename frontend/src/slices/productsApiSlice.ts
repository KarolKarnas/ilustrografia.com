import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

import { Product, ProductVariationOptionalId } from '../types/Product';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], void>({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			providesTags: ['Products'],
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query<Product, string>({
			query: (slug) => ({
				url: `${PRODUCTS_URL}/${slug}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation<Product, void>({
			query: () => ({
				url: `${PRODUCTS_URL}`,
				method: 'POST',
			}),
			invalidatesTags: ['Product'],
		}),
		updateProduct: builder.mutation<Product, ProductVariationOptionalId>({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productSlug}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Products', 'Product'],
		}),
		uploadProductImage: builder.mutation<
			{ image: string; message: string },
			FormData
		>({
			query: (data) => ({
				url: `${UPLOAD_URL}`,
				method: 'POST',
				body: data,
			}),
		}),
		deleteProduct: builder.mutation<{ data: string }, string>({
			query: (slug) => ({
				url: `${PRODUCTS_URL}/${slug}`,
				method: 'DELETE',
			}),
		}),
		createProductReview: builder.mutation<
			{ message: string },
			{ slug: string; comment: string; rating: number }
		>({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.slug}/reviews`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Product'],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductDetailsQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useUploadProductImageMutation,
	useDeleteProductMutation,
	useCreateProductReviewMutation,
} = productsApiSlice;
