import React from 'react'
import { GiReceiveMoney, GiWallet } from "react-icons/gi";
import { FaShippingFast, FaHeadphones } from "react-icons/fa";

//css
import './Footer.css';

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon-box'>
                            <GiWallet />
                        </div>

                        <div className='detail'>
                            <h3>Great Saving</h3>
                            <p>Nostrud adipisicing nisi anim consectetur <br /> Lorem sit ad dolore.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <FaShippingFast />
                        </div>

                        <div className='detail'>
                            <h3>Free Delivery</h3>
                            <p>Nostrud adipisicing nisi anim consectetur <br /> Lorem sit ad dolore.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <FaHeadphones />
                        </div>

                        <div className='detail'>
                            <h3>24/7 Support</h3>
                            <p>Nostrud adipisicing nisi anim consectetur <br /> Lorem sit ad dolore.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <GiReceiveMoney />
                        </div>

                        <div className='detail'>
                            <h3>Money Back</h3>
                            <p>Nostrud adipisicing nisi anim consectetur <br /> Lorem sit ad dolore.</p>
                        </div>
                    </div>
                </div>

                <div className='right-box'>
                    <div className='header'>
                        <img src='images/logo.svg' alt='Shopify'></img>
                        <p>Aute adipisicing dolore labore incididunt occaecat sunt eiusmod cillum.</p>
                    </div>

                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New product</li>
                                <li>old product</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>Contact us</h3>
                            <ul>
                                <li>Almaty, Kazakhstan</li>
                                <li>+7(xxx)xxxxxxx</li>
                                <li>example@info.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;