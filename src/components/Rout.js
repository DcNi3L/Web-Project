import React from 'react'
import { Routes, Route } from 'react-router-dom';

//components
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/Notfound';

const Rout = ({ shop, Filter, AllProd, AddToCart, cart, setCart, setUserData, search, setSearch, searchProd, userData }) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} searchProd={searchProd} userData={userData} />
      <Routes>
        <Route path='/' element={<Login setUserData={setUserData} />} />
        <Route path='/register' element={<Register setUserData={setUserData} />} />
        <Route path='/home' element={<Home AddToCart={AddToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/shop' element={<Shop shop={shop} Filter={Filter} AllProd={AllProd} AddToCart={AddToCart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Rout;