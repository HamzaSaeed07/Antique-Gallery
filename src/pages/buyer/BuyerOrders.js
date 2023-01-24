import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetBuyerOrdersMutation, useUpdateOrderMutation } from '../../api';
import NavBar from '../../components/NavBar';
import toast from 'react-hot-toast';
import '../../App.css';
import Loader from '../../components/Spinner';

const BuyerOrders = () => {
  const [modalShow, setModalShow] = useState(false);
  const { activeUser } = useSelector(state => state.authReducer);
  const [getOrders, response] = useGetBuyerOrdersMutation();
  const [cancelOrder, { isSuccess }] = useUpdateOrderMutation();
  const handleCancel = id => {
    cancelOrder({ id, is_Cancel: true });
    setModalShow(false);
  };
  useEffect(() => {
    getOrders(activeUser?.id);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      toast.success('Order Canceled');
      getOrders(activeUser?.id);
    }
  }, [isSuccess]);
  console.log(response);
  return (
    <>
      <NavBar />
      <div style={{ marginTop: 100 }}>
        <h3 className='ml-3'>{response?.data?.length === 0 ? 'No Orders' : 'Orders List'}</h3>
        {response.isLoading ? (
          <Loader />
        ) : (
          <div className='container-fluid'>
            {response?.data?.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {response?.data?.map((order, index) => (
                    <tr key={order.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={order.product_id.img} width={40} height={40} alt='product_image' style={{ borderRadius: '30%' }} />
                      </td>
                      <td>{order.product_id.name}</td>
                      <td>{order.product_id.price}</td>
                      <td>{order.order_date.slice(0, 10)}</td>
                      <td>{order.status}</td>
                      <td>
                        <div
                          onClick={() => {
                            if (order.is_Cancel) {
                              toast.error('Already Cancelled');
                            } else {
                              setModalShow(true);
                            }
                          }}
                        >
                          <button className='btn btn-danger btn-sm' disabled={order.is_Cancel}>
                            {order.is_Cancel ? 'Cancelled' : 'Cancel'}
                          </button>
                        </div>
                        <Modal show={modalShow} onHide={() => setModalShow(false)} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
                          <Modal.Header closeButton>
                            <Modal.Title id='contained-modal-title-vcenter'>Cancel Order Confirmation</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className='alert alert-info'>Are you sure want to cancel the order?</div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant='danger' onClick={() => handleCancel(order.id)}>
                              Confirm
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
    </>
  );
};

export default BuyerOrders;
