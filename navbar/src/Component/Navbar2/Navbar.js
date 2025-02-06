import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';
import { useState } from 'react';

import './Navbar.css';
import {BrowserRouter as Router, NavLink,Route, Routes } from 'react-router-dom'; // No need for Router import here

function Navbar() {
  const[isMenuOpen,setIsMenuOpen]=useState(false);
  const toggleMenu=()=>{ 
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <Router>
    <nav className='navbar'>
      <div className='navbar-logo'>Website</div>
      
      <div className='menu' onClick={toggleMenu}>
       
        <div className='menu-icon'></div>
        <div  className='menu-icon'></div>
        <div  className='menu-icon'></div>
      </div>

      <ul className={isMenuOpen?'navbar-links active':'navbar-links'}>
        <li><NavLink to='/'onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to='/about'onClick={toggleMenu}>About</NavLink></li>
        <li><NavLink to='/service'onClick={toggleMenu}>Service</NavLink></li>
        <li><NavLink to='/contact'onClick={toggleMenu}>Contact</NavLink></li> {/* Fixed typo here */}
      </ul>
    </nav>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/contact' element={<Contact/>}/>

    </Routes>
    
    </Router>
  );
}

export default Navbar;
