import React, { useState } from 'react';
import '../assets/styles/navbar.css';
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>

      <div className='nav-left'>
        <h2>Time Tracker Dashboard</h2>
      </div>

      {/* Right section */}
      <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>

        <div className='icon'>
          <FiSearch size={20}/>
        </div>

        <div className='icon'>
          <IoNotificationsOutline size={22}/>
        </div>

        <div className='profile'>
          <FaUserCircle size={35}/>
          <div className='profile-info'>
            <span className='name'>John Doe</span>
            <span className='course'>React Developer</span>
          </div>
        </div>

      </div>

      {/* Mobile toggle button */}
      <button className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={25}/> : <HiMenu size={25}/>}
      </button>

    </div>
  );
};

export default Navbar;