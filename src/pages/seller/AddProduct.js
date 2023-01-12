import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../../Style/AddProduct.css';
import { useAddProductMutation, useGetCategoriesQuery } from '../../api';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const AddProduct = () => {
  const { data } = useGetCategoriesQuery();
  const [addPost, response] = useAddProductMutation();
  const [state, setState] = useState({
    name: '',
    price: 1,
    AD_date: '',
    Description: '',
    Category: '',
  });
  const [img, setImg] = useState();
  const imageInputRef = React.useRef();
  const { activeUser } = useSelector(state => state.authReducer);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const todayDate = new Date().toISOString().slice(0, 10);

  const handleSubmit = e => {
    e.preventDefault();
    if (state.Category === '') {
      toast.error('Please Select Category');
    } else {
      const data = new FormData();
      data.append('name', state.name);
      data.append('price', state.price);
      data.append('img', img);
      data.append('AD_date', state.AD_date);
      data.append('Description', state.Description);
      data.append('status', 'Action');
      data.append('Category', state.Category);
      data.append('Publish_date', todayDate);
      data.append('sellers', activeUser.id);
      addPost(data);
    }
  };

  useEffect(() => {
    const handleResponse = () => {
      if (response.isSuccess && response.data) {
        toast.success('Product Added');
        setState({
          name: '',
          price: 1,
          AD_date: '',
          Description: '',
          Category: '',
        });
        imageInputRef.current.value = '';
        setImg(null);
      }
    };
    handleResponse();
  }, [response]);

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='title'>Title</label>
            <input type='text' placeholder='Title' value={state.name} className='form-control ' name='name' id='title' onChange={handleChange} required />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor='price'>Price</label>
            <input type='number' value={state.price} className='form-control ' id='price' name='price' onChange={handleChange} required />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-3 mb-3'>
            <label htmlFor='ad-date'>AD-Date</label>
            <input type='date' className='form-control ' value={state.AD_date} id='ad-date' name='AD_date' placeholder='City' onChange={handleChange} required />
          </div>
          <div className='col-md-3 mb-3'>
            <label htmlFor='category'>Category</label>
            <select className='form-select' name='Category' value={state.Category} id='category' aria-label='Select Category' onChange={handleChange}>
              <option value='Select Category'>Select Category</option>
              {data?.results?.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.category_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-4 mb-3'>
            <label htmlFor='image'>Image</label>
            <input type='file' className='form-control ' ref={imageInputRef} accept='image/*' id='image' required onChange={e => setImg(e.target.files[0])} />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-9 mb-3'>
            <label htmlFor='description'>Description</label>
            <textarea className='form-control' rows={4} value={state.Description} name='Description' placeholder='Write something...' id='description' required onChange={handleChange} />
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>
          {response.isLoading ? <Spinner animation='border' variant='warning' /> : 'Add Product'}
        </button>
      </form>
    </>
  );
};

export default AddProduct;
