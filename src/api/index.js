import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Orders', 'Admin', 'Seller', 'Category'],
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
    getProudctById: build.query({
      query: id => `Products/${id}/`,
      providesTags: ['Products'],
    }),
    getCategories: build.query({
      query: () => 'Product_category/',
      providesTags: ['Category'],
    }),
    addCategory: build.mutation({
      query: data => {
        return {
          url: 'Product_category/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Category'],
    }),
    editCategory: build.mutation({
      query: data => {
        return {
          url: `Product_category/${data.id}/`,
          method: 'PATCH',
          body: { category_name: data.category_name },
        };
      },
      invalidatesTags: ['Category'],
    }),
    deleteCategory: build.mutation({
      query: id => {
        return {
          url: `Product_category/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Category'],
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
    editProduct: build.mutation({
      query: data => {
        return {
          url: `Products/${data.get('id')}/`,
          method: 'PATCH',
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
    getBuyerOrders: build.mutation({
      query: id => {
        return {
          url: 'Buyer_order/',
          method: 'POST',
          body: { customer: id },
        };
      },
      providesTags: ['Buyer'],
    }),
    addOrder: build.mutation({
      query: data => {
        return {
          url: 'make_order/',
          method: 'POST',
          body: data,
        };
      },
      providesTags: ['Buyer'],
    }),
    deleteOrder: build.mutation({
      query: id => {
        return {
          url: 'Buyer_order/',
          method: 'DELETE',
          body: { id },
        };
      },
      invalidatesTags: ['Buyer'],
    }),
  }),
});

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation, useGetSellerProductsMutation, useGetCategoriesQuery, useAddProductMutation, useDeleteProductMutation, useEditProductMutation, useGetProudctByIdQuery, useGetBuyerOrdersMutation, useDeleteOrderMutation, useAddOrderMutation, useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation } = api;
