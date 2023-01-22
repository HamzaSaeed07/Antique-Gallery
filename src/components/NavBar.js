import '../Style/NavBar.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/auth';
import { Cart, CartFill } from 'react-bootstrap-icons';

function NavBar() {
  const user = useSelector(state => state.authReducer.activeUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='fixed-top'>
      <Navbar bg='transparent' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll' className='justify-content-around'>
            <Nav style={{ maxHeight: '120px' }} navbarScroll>
              <NavLink to='/'>
                <p style={{ color: '#FFD700' }}>Home</p>
              </NavLink>
              <NavLink to='/products'>
                <p style={{ color: '#FFD700' }}>Products</p>
              </NavLink>
              <NavLink to='/bid'>
                <p style={{ color: '#FFD700' }}>Auction</p>
              </NavLink>
              {user ? (
                <button
                  className='logout-btn'
                  onClick={() => {
                    dispatch(logout());
                    navigate('/');
                  }}
                >
                  <p style={{ color: '#FFD700' }}>Logout</p>
                </button>
              ) : (
                <NavLink to='/login'>
                  <p style={{ color: '#FFD700' }}>Login</p>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
          <div className='d-flex '>
            {user && (
              <p>
                Welcome <span className='nav-user-name'>{user.name}</span>
              </p>
            )}
            {user && <img src={user.img} alt='user-profile' width={30} height={30} style={{ marginLeft: '10px', borderRadius: '50%' }} />}
            {user && (
              <div onClick={() => navigate('/buyer/orders')} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                <Cart color='orange' size={25} />
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
