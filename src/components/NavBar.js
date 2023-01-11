import '../Style/NavBar.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/auth';

function NavBar() {
  const user = useSelector(state => state.authReducer.activeUser);
  console.log(user);
  const dispatch = useDispatch();

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
                <button onClick={() => dispatch(logout())}>
                  <p style={{ color: '#FFD700' }}>Logout</p>
                </button>
              ) : (
                <NavLink to='/login'>
                  <p style={{ color: '#FFD700' }}>Login</p>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
          <p>{user && `Welcome ${user.email}`}</p>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
