import React from 'react'
import { Link } from 'react-router-dom';
import { FaCrown, FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

//css
import './About.css';

const About = () => {
  return (
    <>
      <main className='about'>
        <h2>about</h2>
        <p>Home . about</p>

        <div className='con'>
          <div className='header'>
            <h2>About Us</h2>
          </div>

          <div className='img'>
            <p>Shopify Co. - the largest trading company in Kazakhstan, a leader in the sale of electronics and household appliances.</p>
          </div>

          <div className='info inf'>
            <div className='icon'>
              <div className='icon_box'>
                <FaCrown />
              </div>
              <div className='text'>
                <h3>10</h3>
                <p>Years</p>
              </div>
            </div>

            <div className='icon'>
              <div className='icon_box'>
                <IoIosPeople />
              </div>
              <div className='text'>
                <h3>5000</h3>
                <p>Emmployers</p>
              </div>
            </div>

            <div className='icon'>
              <div className='icon_box'>
                <IoStorefrontSharp />
              </div>
              <div className='text'>
                <h3>150</h3>
                <p>Stores</p>
              </div>
            </div>
          </div>

          <p className='info_text'>Shopify Co. It is a member of the Euronics European purchasing cooperative, which unites 29 retail organizations from 36 countries, which allows the company to respond promptly to global trends in consumer demand and timely supply the most popular new products of electrical household appliances and electronics to Kazakhstanis.</p>
          
          <div className='info inf'>
            <div className='icon'>
              <div className='icon_box'>
                <FaShoppingCart />
              </div>
              <div className='text'>
                <h3>5 million</h3>
                <p>Purchases Annually</p>
              </div>
            </div>

            <div className='icon'>
              <div className='icon_box'>
                <FaCreditCard />
              </div>
              <div className='text'>
                <h3>2 million</h3>
                <p>In the Bonus Club</p>
              </div>
            </div>

            <div className='icon'>
              <div className='icon_box'>
                <FaHeadphonesSimple />
              </div>
              <div className='text'>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>

          </div>

          <Link className='link' to='/shop'>Go to shop</Link>
        </div>
        
      </main>
    </>
  )
}

export default About;