import React from 'react';
import '../assets/styles/navbar.css'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='nav-left'>
        <h2>Time Tracker Dashboard</h2>
      </div>

      <div className='nav-right'>

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

    </div>
  );
}

export default Navbar;