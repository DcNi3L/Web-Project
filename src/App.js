import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

//components
import Rout from './components/Rout';
import Homeproduct from './components/include/Home_prods';

//css
import './App.css';

const App = () => {
  //Shop product function
  const [shop, setShop] = useState(Homeproduct)

  const AllProd = () => {
    setShop(Homeproduct)
  }
  const Filter = (x) => {
    const catFilter = Homeproduct.filter((prod) => {
      return prod.cat === x
    })
    setShop(catFilter)
  }

  //Search product function
  const [search, setSearch] = useState('')

  const searchLenght = (search || []).length === 0
  const searchProd = () => {
    if (searchLenght) {
      alert("Please Search Something!")
      setShop(Homeproduct)
    }
    else {
      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search
      })

      setShop(searchFilter)
    }
  }

  //Add to cart function
  const [cart, setCart] = useState([])

  const AddToCart = (prod) => {
    const exist = cart.find((x) => {
      return x.id === prod.id
    })
    if (exist) {
      alert("This product already in Cart")
    }
    else {
      setCart([...cart, { ...prod, qty: 1 }])
      alert("Product added to Cart")
    }
  }

  //userdata setting
  const[userData, setUserData] = useState('')

  return (
    <>
      <BrowserRouter>
        <Rout
          cart={cart} setCart={setCart}
          shop={shop} Filter={Filter} AllProd={AllProd} AddToCart={AddToCart}
          setUserData={setUserData}
          search={search} setSearch={setSearch} searchProd={searchProd} 
          userData={userData}
        />
      </BrowserRouter> 
    </>
  )
}

export default App;