import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Customers', 'Admin', 'Seller', 'Category'],
  endpoints: build => ({
    Register: build.mutation({
      query: data => {
        return {
          url: 'Register/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['User'],
    }),
    Login: build.mutation({
      query: data => {
        return {
          url: 'login_auth/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: page => `Products/?page=${page}`,
      providesTags: ['Products'],
    }),
    getCategories: build.query({
      query: () => 'Product_category/',
      providesTags: ['Category'],
    }),
    getSellerProducts: build.mutation({
      query: id => {
        return {
          url: 'seller_products/',
          method: 'POST',
          body: id,
        };
      },
      providesTags: ['Seller'],
    }),
    addProduct: build.mutation({
      query: data => {
        return {
          url: 'Products/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Products'],
    }),
    deleteProduct: build.mutation({
      query: id => {
        return {
          url: `Products/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation, useGetSellerProductsMutation, useGetCategoriesQuery, useAddProductMutation, useDeleteProductMutation } = api;
