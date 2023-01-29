import React, { useEffect, useState } from 'react';
import { Check2Square } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';
import { useUpdateOrderMutation } from '../../api';

const OrdersTable = ({ order }) => {
  const [status, setStatus] = useState();
  const [updateStatus, { isLoading, isSuccess }] = useUpdateOrderMutation();

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
    <tr key={order.id}>
      <td>{order.buyer_id}</td>
      <td>{order.product_id.id}</td>
      <td>
        <img src={order.product_id.img} alt='product-img' style={{ width: '2rem', height: '2rem', borderRadius: '40%' }} />
      </td>
      <td>{order.order_date.slice(0, 15)}</td>
      <td>{order.product_id.name}</td>
      <td>{order.product_id.price}</td>
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
  );
};

export default OrdersTable;
