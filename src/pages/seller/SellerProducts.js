import React from 'react';
import { useGetProductsQuery } from '../../api';
import Header from './Header';

const SellerProducts = () => {
  const { data, isLoading } = useGetProductsQuery(1);
  console.log(data);
  return (
    <>
      <Header />
      <div className='container mb-5'>
        <div className='d-flex justify-content-left row'>
          <div className='col-md-10'>
            {data?.results.map(product => (
              <div className='row p-2 bg-white border rounded'>
                <div className='col-md-3 mt-1'>
                  <img className='img-fluid img-responsive rounded product-image' src={product.img} alt='product_image' />
                </div>
                <div className='col-md-6 mt-1'>
                  <h5>{product.name}</h5>
                  <div className='mt-1 mb-1 spec-1'>
                    <span>Category: </span>
                    <span className='dot'></span>
                    <span>{product.Category}</span>
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
                    <button className='btn btn-primary btn-sm' type='button'>
                      Edit
                    </button>
                    <button className='btn btn-outline-danger btn-sm mt-2' type='button'>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProducts;
