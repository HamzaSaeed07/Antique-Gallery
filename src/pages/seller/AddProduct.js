import React from 'react';
import Header from './Header';
import '../../Style/AddProduct.css';

const AddProduct = () => {
  return (
    <>
      <Header />
      <form>
        <div className='form-row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='title'>Title</label>
            <input type='text' placeholder='Title' className='form-control ' id='title' required />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor='price'>Price</label>
            <input type='number' placeholder='1' className='form-control ' id='price' required />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-3 mb-3'>
            <label htmlFor='ad-date'>AD-Date</label>
            <input type='date' className='form-control ' id='ad-date' placeholder='City' required />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor='status'>Status</label>
            <select className='form-select' id='status' aria-label='Select Status'>
              <option>Select Status</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor='category'>Category</label>
            <select className='form-select' id='category' aria-label='Select Category'>
              <option>Select Category</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-3 mb-3'>
            <label htmlFor='image'>Image</label>
            <input type='file' className='form-control ' id='image' required />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-9 mb-3'>
            <label htmlFor='description'>Description</label>
            <textarea className='form-control' rows={4} placeholder='Write something...' id='description' required />
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProduct;
