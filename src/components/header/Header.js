import React from 'react'
import Navbar from '../include/Navbar';

// react-icons
import { IoSearch } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

// css
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ search, setSearch, searchProd, userData }) => {
  return (
    <>
      <header className='header sticky-top'>
        <div className='top_header'>
          <div className='logo'>
            <img src='images/logo.svg' alt='Logo'></img>
          </div>

          <div className='top_header-items'>
            <div className='search-item'>
              <input type='text' value={search} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
              <button onClick={searchProd}><IoSearch /></button>
            </div>

            <div className='login-box'>
              <div className='login-icon'><TbLogout2 /></div>
              <Link to='/' className='login-btn'>
                <button>Login</button>
              </Link>
            </div>

          </div>
        </div>

        <div id='bottom-nav' className='bottom_header'>
          <div className='user_prof'>
            <div className='user-icon'>
              <FaRegUser />
            </div>
            <div className='user-info'>
              <h2>{userData.name}</h2>
              <p>{userData.email}</p>
            </div>
          </div>

          <Navbar />

          <div className='offer'>
            <p>flat 10% over all iphone</p>
          </div>
        </div>

      </header>
    </>
  )
}


// fixed navbar listener
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 5) {
//       document.getElementById('bottom-nav').classList.add('fixed-top');
//       // add padding top to show content behind navbar
//       const navbar_height = document.querySelector('.bottom_header').offsetHeight;
//       document.body.style.paddingTop = navbar_height + 'px';
//     } else {
//       document.getElementById('bottom-nav').classList.remove('fixed-top');
//       // remove padding top from body
//       document.body.style.paddingTop = '0';
//     }
//   });
// });

export default Header;
