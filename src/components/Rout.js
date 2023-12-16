import React from 'react'
import { Routes, Route } from 'react-router-dom';

//components
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const Rout = ({shop, Filter, AllProd, AddToCart, cart, setCart}) => {
  return (
    <>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/shop' element={<Shop shop={shop} Filter={Filter} AllProd={AllProd} AddToCart={AddToCart} />} />
        </Routes>
    </>
  )
}

export default Rout;