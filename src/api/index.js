import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Customers', 'Admin', 'Seller'],
  endpoints: build => ({
    getUser: build.query({
      query: id => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => 'Products',
      providesTags: ['Products'],
    }),
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api;
