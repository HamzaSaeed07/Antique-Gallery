import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotAuth.css';

const NotAuth = () => {
  return (
    <div className='na-container'>
      <div className='text-wrapper'>
        <div className='title' data-content='404'>
          403 - ACCESS DENIED
        </div>
        <div className='subtitle'>Oops, You don't have permission to access this page.</div>
        <div className='buttons'>
          <Link className='button na-link' to='/'>
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotAuth;
