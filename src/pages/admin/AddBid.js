import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useCreateNewBidMutation } from '../../api';

const AddBid = ({ showAdd, setShowAdd }) => {
  const [addBid, response] = useCreateNewBidMutation();
  const [state, setState] = useState({
    product: 1,
    Bidding_date: '',
    Bidding_Start: '',
    Bidding_Duration: 90,
  });
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleAdd = e => {
    e.preventDefault();

    addBid({
      product: state.product,
      Bidding_date: state.Bidding_date,
      Bidding_Start: `${state.Bidding_Start}:00`,
      Bidding_Duration: state.Bidding_Duration,
    });
    setShowAdd(false);
    setState({ product: 1, Bidding_date: '', Bidding_Start: '', Bidding_Duration: 90 });
  };

  useEffect(() => {
    const handleResponse = () => {
      if (response.isSuccess && response.data) {
        toast.success('Bid Added');
      }
    };
    handleResponse();
  }, [response]);
  return (
    <Modal show={showAdd} onHide={() => setShowAdd(false)} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Bid</Modal.Title>
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
          <Button variant='default' onClick={() => setShowAdd(false)}>
            Cancel
          </Button>
          <Button variant='info' type='submit'>
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBid;
