import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotAuth.css';

const Page404 = () => {
  return (
    <div className='na-container'>
      <div className='text-wrapper'>
        <div className='title' data-content='404'>
          404 - NOT FOUND
        </div>
        <div className='subtitle'>Oops! You seem to be lost.</div>
        <div className='buttons'>
          <Link className='button na-link' to='/'>
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
