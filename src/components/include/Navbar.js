import React from 'react'
import {Link} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

//css
import './Navbar.css';

const Navbar = () => {
    const nav_style = {
        background: 'dark'
    };

  return (
    <>
        <nav className='nav'>
            <ul class="nav ">
                <li class="nav-item">
                    <Link to="/home" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/shop" class="nav-link">Shop</Link>
                </li>
                <li class="nav-item">
                    <Link to="/cart" class="nav-link">Cart</Link>
                </li>
                <li class="nav-item">
                    <Link to="/about" class="nav-link">About</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>


        <nav class="navbar">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <RxHamburgerMenu />
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to="/home" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/shop" class="nav-link">Shop</Link>
                </li>
                <li class="nav-item">
                    <Link to="/cart" class="nav-link">Cart</Link>
                </li>
                <li class="nav-item">
                    <Link to="/about" class="nav-link">About</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar;