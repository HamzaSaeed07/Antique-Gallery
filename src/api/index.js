import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Customers', 'Admin', 'Seller'],
  endpoints: build => ({
    sellerRegister: build.mutation({
      query: data => {
        return {
          url: 'Sellers/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['Seller'],
    }),
    Login: build.mutation({
      query: data => {
        return {
          url: 'Sellers/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['Seller'],
    }),
    getProducts: build.query({
      query: () => 'Products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useSellerRegisterMutation, useLoginMutation } = api;
