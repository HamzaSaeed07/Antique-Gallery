import '../Style/NavBar.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
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
              <NavLink to='/login'>
                <p style={{ color: '#FFD700' }}>Login</p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
