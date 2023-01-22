import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDeleteProductMutation, useGetCategoriesQuery, useGetSellerProductsMutation } from '../../api';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import Header from './Header';

const SellerProducts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [openEditModal, setopenEditModal] = useState(false);
  const { activeUser } = useSelector(state => state.authReducer);
  const [getProducts, response] = useGetSellerProductsMutation();
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();
  const { data } = useGetCategoriesQuery();

  const getCategoryName = id => {
    const find = data?.results?.find(cat => cat.id === id);
    return find.category_name;
  };

  useEffect(() => {
    getProducts({ id: activeUser.id });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product Deleted');
      getProducts({ id: activeUser.id });
    }
  }, [isSuccess]);
  return (
    <>
      <Header />
      <div className='container mb-5'>
        <div className='d-flex justify-content-left row'>
          {response.isLoading && (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
              <Spinner animation='border' variant='warning' />
            </div>
          )}
          {response?.data?.length === 0 ? (
            <h3>No Products</h3>
          ) : (
            <div className='col-md-10'>
              {response?.data?.map(product => (
                <div key={product.id} className='row p-2 bg-white border rounded'>
                  <div className='col-md-3 mt-1'>
                    <img className='img-fluid img-responsive rounded product-image' src={product.img} alt='product_image' />
                  </div>
                  <div className='col-md-6 mt-1'>
                    <h5>{product.name}</h5>
                    <div className='mt-1 mb-1 spec-1'>
                      <span>Category: </span>
                      <span className='dot'></span>
                      <span>{getCategoryName(product.Category)}</span>
                    </div>

                    <div className='mt-1 mb-1 spec-1'>
                      <span>AD Date :</span>
                      <span className='dot' style={{ marginLeft: '5px' }}></span>
                      <span>{product.AD_date}</span>
                      <span className='dot'></span>
                    </div>
                    <p className='text-justify text-truncate para mb-0'>
                      {product.Description}
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className='align-items-center align-content-center col-md-3 border-left mt-1'>
                    <div className='d-flex flex-row align-items-center'>
                      <h4 className='mr-1'>${product.price}</h4>
                    </div>
                    <h6 className='text-success'>{product.status}</h6>
                    <EditModal getProducts={getProducts} sellerId={activeUser.id} show={openEditModal} product={product} onHide={() => setopenEditModal(false)} />
                    <div className='d-flex flex-column mt-4'>
                      <button onClick={() => setopenEditModal(true)} className='btn btn-primary btn-sm' type='button'>
                        Edit
                      </button>
                      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} id={product.id} deleteProduct={deleteProduct} />
                      <button onClick={() => setModalShow(true)} className='btn btn-outline-danger btn-sm mt-2' type='button'>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SellerProducts;
