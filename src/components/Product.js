import React, { useState } from 'react';
import cart from '../images/Cart-add-icon.png';
import '../Style/Products.css';
import { useGetProductsQuery } from '../api';
import { useNavigate } from 'react-router-dom';
import Loader from './Spinner';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';

function Product() {
  const pageNumber = useSelector(state => state.globalReducer.pageNumber);
  const { data, isLoading } = useGetProductsQuery(pageNumber);
  const navigate = useNavigate();

  return (
    <div>
      <section className='col-12 row mt-5'>
        <div>
          <span className='float-right'>
            <h6>
              Filter{' '}
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-filter' viewBox='0 0 16 16'>
                <path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
              </svg>
            </h6>
          </span>
        </div>
        {isLoading && <Loader />}
        {data?.results.map(product => {
          return (
            <div key={product.id} className='col-lg-3 col-md-6 col-12'>
              <ul className='cards'>
                <li>
                  <div className='prod-card'>
                    <img src={product.img} alt='product_image' className='card__image' />
                    <div className='card__overlay'>
                      <div className='card__header'>
                        <svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
                          <path />
                        </svg>
                        <img className='card__thumb' src={cart} alt='Add' />
                        <div className='card__header-text'>
                          <h3 className='card__title'>Name:{product.name}</h3>
                          <h3 className='card__status'>Price:{product.price}</h3>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-8'>
                          <p className='card__description'>{product.Description}</p>
                        </div>
                        <div className='col-4'>
                          <span style={{ cursor: 'pointer' }} onClick={() => navigate(`/products/${product.id}`)}>
                            View More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
        <Pagination count={data?.count} pageCurrent={pageNumber} />
      </section>
    </div>
  );
}

export default Product;
