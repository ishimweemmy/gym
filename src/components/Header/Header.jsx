import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import './Header.css';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu =  () =>{
    setMenuOpen(prevState=>!prevState)
  }

  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      {menuOpen === false && mobile === true ? (
        <div onClick={openMenu} style={{ backgroundColor: 'var(--appColor)', padding: "0.5rem", borderRadius: "5px" }}><img style={{ width: "1.5rem", height: "1.5rem" }} src={Bars} alt="" /></div>
      ) : (
        <ul className='header-menu'>
          <li><Link onClick={()=>setMenuOpen(false)} to='hero' span={true} smooth={true}>Home</Link></li>

          <li><Link onClick={()=>setMenuOpen(false)} to='programs' span={true} smooth={true}>Programs</Link></li>

          <li><Link onClick={()=>setMenuOpen(false)} to='reasons' span={true} smooth={true}>why Us</Link></li>
          <li><Link onClick={()=>setMenuOpen(false)} to='plans' span={true} smooth={true}>Plans</Link></li>
          <li><Link onClick={()=>setMenuOpen(false)} to='testimonials' span={true} smooth={true}>Testimonials</Link></li>
        </ul>
      )}
      
    </div>
  )
}

export default Header
