import React from 'react'
import {Link} from 'react-router-dom';

//css
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
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
  )
}

export default Navbar;