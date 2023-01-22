import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/reducers/auth';
import '../../Style/Sidebar.css';

const AdminDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const menuItem = [
    {
      path: '/admin/orders',
      name: 'Orders',
      icon: <Icon.Bag />,
    },
    {
      path: '/admin/category',
      name: 'Category',
      icon: <Icon.Tag />,
    },
    {
      path: '/admin/products',
      name: 'Products',
      icon: <Icon.List />,
    },
    {
      path: '/admin/bidding',
      name: 'Bidding',
      icon: <Icon.Coin />,
    },
    {
      path: '/admin/sellers',
      name: 'Sellers',
      icon: <Icon.People />,
    },
    {
      path: '/admin/buyers',
      name: 'Buyers',
      icon: <Icon.PersonLinesFill />,
    },
  ];
  return (
    <div className='s-container'>
      <div style={{ width: isOpen ? '250px' : '50px' }} className='sidebar'>
        <div className='top_section'>
          <div style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
            <span style={{ color: 'white', fontSize: '20px' }}>Dashboard</span>
          </div>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
            <Icon.List onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }} to={item.path} key={index} className='link' acitveclassname='active'>
            <div className='icon'>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none', fontSize: '16px' }} className='link_text'>
              {item.name}
            </div>
          </NavLink>
        ))}
        <Button onClick={() => dispatch(logout())} variant='outline-secondary' style={{ marginLeft: isOpen ? '10px' : '2px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: isOpen ? 'block' : 'none' }}>Logout</span> <Icon.BoxArrowRight />
          </div>
        </Button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminDashboard;
