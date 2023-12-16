import React from 'react'
import { Routes, Route } from 'react-router-dom';

//components
import Home from './Home';

const Rout = () => {
  return (
    <>
        <Routes>

            <Route exact path='/' element={<Home />} />


        </Routes>
    </>
  )
}

export default Rout;