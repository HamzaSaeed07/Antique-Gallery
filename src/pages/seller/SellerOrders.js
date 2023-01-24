import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Check2Square } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetSellerOrdersMutation, useUpdateOrderMutation } from '../../api';
import Loader from '../../components/Spinner';

const SellerOrders = () => {
  const { activeUser } = useSelector(state => state.authReducer);
  const [getOrders, response] = useGetSellerOrdersMutation();
  const [status, setStatus] = useState();
  const [updateStatus, { isLoading, isSuccess }] = useUpdateOrderMutation();
  useEffect(() => {
    getOrders(activeUser.id);
  }, []);
  console.log(response);

  const handleStatus = id => {
    console.log(id);
    updateStatus({ id, status });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success('Status Updated');
    }
  }, [isLoading, isSuccess]);

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
                  <th>Order Date</th>
                  <th>Product ID</th>
                  <th>Cancelled</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {response?.data?.map(order => (
                  <tr key={order.id}>
                    <td>{order.buyer_id}</td>
                    <td>{order.order_date.slice(0, 15)}</td>
                    <td>{order.product_id}</td>
                    <td>{order.is_Cancel ? 'Yes' : 'No'}</td>
                    <td>
                      <div className='d-flex align-items-center justify-content-center gap-3'>
                        <select value={status} defaultValue={order.status} onChange={e => setStatus(e.target.value)}>
                          <option value='Pending'>Pending</option>
                          <option value='Conform'>Conform</option>
                          <option value='Delivered'>Delivered</option>
                          <option value='Cancelled'>Cancelled</option>
                        </select>
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            handleStatus(order.id);
                          }}
                        >
                          <Check2Square size={18} color='green' />
                        </div>
                      </div>
                    </td>
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

export default SellerOrders;
