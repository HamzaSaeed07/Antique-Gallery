import { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useEditProductMutation, useGetCategoriesQuery, useGetProudctByIdQuery } from '../../api';

function EditModal(props) {
  const { data } = useGetCategoriesQuery();
  const [editProduct] = useEditProductMutation();
  const { data: product, isSuccess, isLoading } = useGetProudctByIdQuery(props.id);
  console.log(product);
  const [img, setImg] = useState();
  const imageInputRef = useRef();
  const [state, setState] = useState({
    id: 0,
    name: '',
    price: 1,
    AD_date: '',
    Description: '',
    Category: '',
  });
  useEffect(() => {
    if (isSuccess && !isLoading) {
      setState({ ...state, id: product.id, name: product.name, price: product.price, AD_date: product.AD_date, Description: product.Description, Category: product.Category });
    }
  }, [isSuccess, isLoading, product]);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', state.name);
    data.append('price', state.price);
    data.append('AD_date', state.AD_date);
    data.append('Description', state.Description);
    data.append('Category', state.Category);
    data.append('id', state.id);
    if (img) {
      data.append('img', img);
      editProduct(data);
      props.onHide();
    } else {
      editProduct(data);
      props.onHide();
    }
    props.getProducts({ id: props.sellerId });
  };
  return (
    <Modal style={{ marginTop: '40px' }} show={props.show} onHide={props.onHide} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <input type='file' className='form-control ' ref={imageInputRef} accept='image/*' id='image' onChange={e => setImg(e.target.files[0])} />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-md-9 mb-3'>
              <label htmlFor='description'>Description</label>
              <textarea className='form-control' rows={4} value={state.Description} name='Description' placeholder='Write something...' id='description' required onChange={handleChange} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', gap: '2rem' }}>
            <button type='button' onClick={props.onHide} className='btn btn-default'>
              Cancel
            </button>
            <button className='btn btn-primary' type='submit'>
              Edit
              {/* {response.isLoading ? <Spinner animation='border' variant='warning' /> : 'Add Product'} */}
            </button>
          </div>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant='info'>Confirm</Button>
        <Button variant='default' onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default EditModal;
