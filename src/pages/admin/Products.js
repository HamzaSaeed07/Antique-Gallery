import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation, useGetCategoriesQuery, useGetProductsQuery } from '../../api';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Spinner';
import DeleteModal from '../seller/DeleteModal';

const Products = () => {
  const pageNumber = useSelector(state => state.globalReducer.pageNumber);
  const { data, isLoading, refetch } = useGetProductsQuery(pageNumber);
  const { data: categories } = useGetCategoriesQuery();
  const [modalShow, setModalShow] = useState(false);
  const [delId, setDelId] = useState();
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  const getCategoryName = id => {
    const find = categories?.results?.find(cat => cat.id === id);
    return find?.category_name;
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product Deleted');
      refetch();
    }
  }, [isSuccess]);
  return (
    <>
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} id={delId} deleteProduct={deleteProduct} />
      <div className='container mb-5'>
        <div className='d-flex justify-content-left row'>
          {isLoading && <Loader />}
          {data?.results.length === 0 ? (
            <h3>No Products</h3>
          ) : (
            <div className='col-md-10'>
              {data?.results.map(product => (
                <div key={product.id} className='row p-2 bg-white border rounded'>
                  <div className='col-md-3 mt-1'>
                    <img className='img-fluid img-responsive rounded product-image' src={product.img} alt='product_image' />
                  </div>
                  <div className='col-md-6 mt-1'>
                    <h5>{product.name}</h5>
                    <div className='mt-1 mb-1 spec-1'>
                      <span>Product ID: </span>
                      <span className='dot'></span>
                      <span>{product.id}</span>
                    </div>
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
                    <div className='d-flex flex-column mt-4'>
                      <button
                        onClick={() => {
                          setModalShow(true);
                          setDelId(product.id);
                        }}
                        className='btn btn-outline-danger btn-sm mt-2'
                        type='button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='d-flex align-items-center justify-content-center mr-20 mt-2'>
          <Pagination count={data?.count} pageCurrent={pageNumber} />
        </div>
      </div>
    </>
  );
};

export default Products;
