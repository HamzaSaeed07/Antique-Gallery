import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Check2Square } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetSellerOrdersMutation, useUpdateOrderMutation } from '../../api';
import Loader from '../../components/Spinner';
import OrdersTable from './OrdersTable';

const SellerOrders = () => {
  const { activeUser } = useSelector(state => state.authReducer);
  const [getOrders, response] = useGetSellerOrdersMutation();
  useEffect(() => {
    getOrders(activeUser.id);
  }, []);
  console.log(response);

  return (
    <div>
      <h3 className='ml-3'>{response?.data?.length === 0 ? 'No Orders' : 'Orders List'}</h3>
      {response.isLoading ? (
        <Loader />
      ) : (
        <div className='container-fluid'>
          {response?.data?.length > 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Buyer ID</th>
                  <th>Product ID</th>
                  <th>Product Image</th>
                  <th>Order Date</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Cancelled</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {response?.data?.map(order => (
                  <OrdersTable key={order.id} order={order} />
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}{' '}
    </div>
  );
};

export default SellerOrders;
