import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';
import { useDeleteOrderMutation, useGetAllOrdersQuery } from '../../api';
import Loader from '../../components/Spinner';

const Orders = () => {
  const { data, isLoading } = useGetAllOrdersQuery();
  const [modalShow, setModalShow] = useState(false);
  const [deleteOrder, { isSuccess, isLoading: orderLoading }] = useDeleteOrderMutation();
  const handleDelete = id => {
    deleteOrder(id);
    setModalShow(false);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('Product Deleted');
    }
  }, [isSuccess]);
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
                  <th></th>
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
                    <td>
                      <div onClick={() => setModalShow(true)}>
                        <Trash color='red' size={18} style={{ cursor: 'pointer' }} />
                      </div>
                      <Modal show={modalShow} onHide={() => setModalShow(false)} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
                        <Modal.Header closeButton>
                          <Modal.Title id='contained-modal-title-vcenter'>Delete Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className='alert alert-danger'>Are you sure want to delete?</div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant='default' onClick={() => setModalShow(false)}>
                            Cancel
                          </Button>
                          <Button variant='danger' onClick={() => handleDelete(order.id)}>
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
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

export default Orders;
