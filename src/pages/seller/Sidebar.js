import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../../Style/Sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/seller/add-product',
      name: 'Add Product',
      icon: <Icon.PlusCircle />,
    },
    {
      path: '/seller/products',
      name: 'Products List',
      icon: <Icon.Cart />,
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
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
