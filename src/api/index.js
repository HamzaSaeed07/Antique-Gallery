import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: 'antique-api',
  tagTypes: ['User', 'Products', 'Orders', 'Admin', 'Seller', 'Category', 'Bidding'],
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
    getAllProducts: build.query({
      query: page => 'Products/',
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
      providesTags: ['Orders'],
    }),
    getAllOrders: build.query({
      query: () => 'View_all_order/',
      providesTags: ['Orders'],
    }),
    addOrder: build.mutation({
      query: data => {
        return {
          url: 'make_order/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Orders'],
    }),
    deleteOrder: build.mutation({
      query: id => {
        return {
          url: 'Buyer_order/',
          method: 'DELETE',
          body: { id },
        };
      },
      invalidatesTags: ['Orders'],
    }),
    updateOrder: build.mutation({
      query: ({ id, ...data }) => {
        return {
          url: `View_all_order/${id}/`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['Orders'],
    }),
    getBiddingList: build.query({
      query: () => 'Product_Bidding/',
      providesTags: ['Bidding'],
    }),
    getBidById: build.query({
      query: id => {
        return {
          url: `Product_Bidding/${id}/`,
          method: 'GET',
        };
      },
      providesTags: ['Products'],
    }),
    createNewBid: build.mutation({
      query: data => {
        return {
          url: 'Product_Bidding/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Bidding'],
    }),
    updateBid: build.mutation({
      query: data => {
        return {
          url: `Update_bidding_schedule/${data.id}/`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['Bidding'],
    }),
    deleteBid: build.mutation({
      query: id => {
        return {
          url: `Product_Bidding/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Bidding'],
    }),
    getAllUsers: build.query({
      query: () => 'User_list/',
      providesTags: ['Admin'],
    }),
    deleteUser: build.mutation({
      query: id => {
        return {
          url: `User_list/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Admin'],
    }),
  }),
});

export const { useGetProductsQuery, useRegisterMutation, useLoginMutation, useGetSellerProductsMutation, useGetCategoriesQuery, useAddProductMutation, useDeleteProductMutation, useEditProductMutation, useGetProudctByIdQuery, useGetBuyerOrdersMutation, useDeleteOrderMutation, useAddOrderMutation, useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation, useGetBiddingListQuery, useGetBidByIdQuery, useUpdateBidMutation, useDeleteBidMutation, useCreateNewBidMutation, useGetAllOrdersQuery, useGetAllUsersQuery, useDeleteUserMutation, useUpdateOrderMutation, useGetAllProductsQuery } = api;
