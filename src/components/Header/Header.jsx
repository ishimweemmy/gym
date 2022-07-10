import React from 'react'
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
