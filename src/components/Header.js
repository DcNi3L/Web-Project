import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './inc/Navbar';

// react-icons
import { IoSearch } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

// css
import './Header.css';

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <header className='header'>
          <div className='top_header'>
              <div className='logo'>
                <img src='images/logo.svg' alt='Logo'></img>
              </div>

              <div className='top_header-items'>
                <div className='search-item'>
                  <input type='text' value='' placeholder='Search...' />
                  <button><IoSearch /></button>
                </div> 

                {
                  isAuthenticated ? 

                  // for logging out
                  <div className='login-box'>
                    <div className='login-icon'><TbLogout2 /></div>
                    <div className='login-btn'>
                      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                    </div>
                  </div>

                  :

                  // for logging in
                  <div className='login-box'>
                    <div className='login-icon'><FaSignInAlt /></div>
                    <div className='login-btn'>
                      <button onClick={() => loginWithRedirect()}>Login</button>
                    </div>
                  </div>
                }

              </div>
          </div>

          <div id='bottom-nav' className='bottom_header'>
            <div className='user_prof'>
              { // user profile block
                isAuthenticated ? 
                <>
                  <div className='user-icon'>
                    <FaRegUser />
                  </div>
                  <div className='user-info'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>

                :

                <>
                  <div className='user-icon'>
                    <FaRegUser />
                  </div>
                  <div className='user-info'>
                    <p>Please Login to interact</p>
                  </div>
                </>
              }
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
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 120) {
        document.getElementById('bottom-nav').classList.add('fixed-top');
        // add padding top to show content behind navbar
        const navbar_height = document.querySelector('.bottom_header').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('bottom-nav').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

export default Header;