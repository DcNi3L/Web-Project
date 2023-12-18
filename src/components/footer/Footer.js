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
                            <p>Unbelievable discounts on your must-haves.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <FaShippingFast />
                        </div>

                        <div className='detail'>
                            <h3>Free Delivery</h3>
                            <p>Receive your order swiftly and without extra cost.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <FaHeadphones />
                        </div>

                        <div className='detail'>
                            <h3>24/7 Support</h3>
                            <p>Reliable support available around the clock.</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon-box'>
                            <GiReceiveMoney />
                        </div>

                        <div className='detail'>
                            <h3>Money Back</h3>
                            <p>Our commitment to your happiness is unwavering.</p>
                        </div>
                    </div>
                </div>

                <div className='right-box'>
                    <div className='header'>
                        <img src='images/logo.svg' alt='Shopify'></img>
                        <p>The largest trading company in Kazakhstan, a leader in the sale of electronics and household appliances.</p>
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
                                <a href='https://maps.app.goo.gl/kEHskxigKz3794Xp6' target='_blank' rel='noreferrer'><li>Almaty, Kazakhstan</li></a>
                                <a href='tel:+77075837312'><li>+7(707)-583-73-12</li></a>
                                <a href='mailto:donniemek@gmail.com'><li>donniemek@gmail.com</li></a>
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