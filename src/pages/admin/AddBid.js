import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useCreateNewBidMutation, useGetAllProductsQuery } from '../../api';

const AddBid = ({ showAdd, setShowAdd }) => {
  const { data, isLoading } = useGetAllProductsQuery();
  const [addBid, response] = useCreateNewBidMutation();
  const [state, setState] = useState({
    product: data && data[0].id,
    Bidding_date: '',
    Bidding_Start: '',
    Bidding_Duration: 30,
  });
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleAdd = e => {
    e.preventDefault();
    addBid({
      product: state.product,
      Bidding_date: state.Bidding_date,
      Bidding_Start: state.Bidding_Start + ':00',
      Bidding_Duration: state.Bidding_Duration,
    });
    setShowAdd(false);
    setState({ product: 1, Bidding_date: '', Bidding_Start: '', Bidding_Duration: 30 });
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
              <select className='form-select' name='product' id='prdocut' onChange={handleChange} required>
                {!isLoading &&
                  data?.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
              </select>
              {/* <input type='number' value={state.product} className='form-control ' name='product' id='prdocut' onChange={handleChange} required /> */}
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
              <select className='form-select' id='Bidding_Duration' name='Bidding_Duration' onChange={handleChange} required>
                <option value={30}>30</option>
                <option value={60}>60</option>
                <option value={90}>90</option>
              </select>
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
