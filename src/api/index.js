import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Customers', 'Admin', 'Seller'],
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
          url: 'Buyer_Login/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => 'Products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation } = api;
