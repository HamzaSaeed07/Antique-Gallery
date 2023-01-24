import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDeleteUserMutation } from '../../api';

const DeleteBid = ({ showDel, onHide, id }) => {
  const [deleteUser, response] = useDeleteUserMutation();
  const handleDelete = () => {
    deleteUser(id);
    onHide();
  };
  useEffect(() => {
    const handleResponse = () => {
      if (response.isSuccess && response.data) {
        toast.success('User Deleted');
      }
    };
    handleResponse();
  }, [response]);
  return (
    <Modal show={showDel} onHide={onHide} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='alert alert-danger'>Are you sure want to delete?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='default' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBid;
