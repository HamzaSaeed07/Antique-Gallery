import React from 'react';
import { Table } from 'react-bootstrap';
import { useGetAllOrdersQuery } from '../../api';
import Loader from '../../components/Spinner';

const Orders = () => {
  const { data, isLoading } = useGetAllOrdersQuery();

  return (
    <div>
      <h3 className='ml-3'>{data?.results?.length === 0 ? 'No Orders' : 'Orders List'}</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='container-fluid'>
          {data?.results?.length > 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Product ID</th>
                  <th>Buyer ID</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.order_date}</td>
                    <td>{order.product_id}</td>
                    <td>{order.buyer_id}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
