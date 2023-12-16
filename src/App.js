import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';

//components
import Header from './components/Header';
import Rout from './components/Rout';

//css
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App