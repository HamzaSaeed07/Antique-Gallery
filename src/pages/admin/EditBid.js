import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useGetBidByIdQuery, useUpdateBidMutation } from '../../api';

const EditBid = ({ showEdit, onHide, id }) => {
  const { data: bid, isLoading, isSuccess } = useGetBidByIdQuery(id);
  const [updateBid, response] = useUpdateBidMutation();
  const [state, setState] = useState({
    product: 1,
    Bidding_date: '',
    Bidding_Start: '',
    Bidding_Duration: 90,
    Bidding_status: '',
  });
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (!isLoading && isSuccess) {
      setState({ ...state, product: bid.product, Bidding_date: bid.Bidding_date, Bidding_Start: bid.Bidding_Start, Bidding_Duration: bid.Bidding_Duration, Bidding_status: bid.Bidding_status });
    }
  }, [bid]);
  const handleAdd = e => {
    e.preventDefault();
    console.log(state);
    updateBid({
      id,
      product: state.product,
      Bidding_date: state.Bidding_date,
      Bidding_Start: state.Bidding_Start,
      Bidding_Duration: state.Bidding_Duration,
      Bidding_status: state.Bidding_status,
    });
  };

  useEffect(() => {
    const handleResponse = () => {
      if (response.isSuccess && response.data) {
        toast.success('Bid Updated');
      } else if (response.isError) {
        toast.error(response.error.message);
      }
    };
    handleResponse();
  }, [response]);
  return (
    <Modal show={showEdit} onHide={onHide} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Bid</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAdd}>
          <div className='form-row'>
            <div className='col-md-8 mb-3'>
              <label htmlFor='title'>Product</label>
              <input type='number' value={state.product} className='form-control ' name='product' id='prdocut' onChange={handleChange} required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-8 mb-3'>
              <label htmlFor='Bidding_date'>Bidding Date</label>
              <input type='date' className='form-control ' placeholder='Date' value={state.Bidding_date} id='Bidding_date' name='Bidding_date' onChange={handleChange} required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-8 mb-3'>
              <label htmlFor='Bidding_Start'>Bid Start Time</label>
              <input type='time' value={state.Bidding_Start} className='form-control ' id='Bidding_Start' name='Bidding_Start' onChange={handleChange} required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-8 mb-3'>
              <label htmlFor='Bidding_Duration'>Duration</label>
              <input type='number' value={state.Bidding_Duration} className='form-control ' id='Bidding_Duration' name='Bidding_Duration' onChange={handleChange} required />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-8 mb-3'>
              <label htmlFor='status'>Status</label>
              <select className='form-select' name='Bidding_status' value={state.Bidding_status} id='status' aria-label='Select Category' onChange={handleChange}>
                <option value={'Start soon'}>Start Soon</option>
                <option value={'Started'}>Started</option>
              </select>
            </div>
          </div>
          <Button variant='default' onClick={onHide}>
            Cancel
          </Button>
          <Button variant='info' type='submit'>
            Update
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditBid;
