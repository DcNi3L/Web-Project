import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";

//css
import './Cart.css';

const Cart = ({cart, setCart}) => {
  //increment function
  const incqty = (p) =>
  {
    const exist = cart.find((x) =>
    {
      return x.id === p.id
    })
    setCart(cart.map((current) =>
    {
      return current.id === p.id ? {...exist, qty: exist.qty + 1} : current
    }))
  }

  //decrement function
  const decqty = (p) =>
  {
    const exist = cart.find((x) =>
    {
      return x.id === p.id
    })
    setCart(cart.map((current) =>
    {
      return current.id === p.id ? {...exist, qty: exist.qty - 1} : current
    }))
  }

  //remove product function
  const removeProd = (p) =>
  {
    const exist = cart.find((x) =>
    {
      return x.id === p.id
    })
    if(exist.qty > 0)
    {
      setCart(cart.filter((current) =>
      {
        return current.id !== p.id
      }))
    }
  }

  //total price function
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
        <main className='cart'>
            <h3>cart</h3>
            <p>Home . cart</p>

            {
              cart.length === 0 && 
              <>
                <div className='empty-cart'>
                  <h2>There is no product in your shopping cart</h2>
                  <Link to='/shop'><button>Shop Now</button></Link>
                </div>
              </>
            }

            <div className='container'>
              {
                cart.map((current) =>
                {
                  return(
                    <>
                      <div className='box'>
                        <div className='img-box'>
                          <img src={current.img} alt=''></img>
                        </div>

                        <div className='detail'>
                          <div className='info'>
                            <h4>{current.cat}</h4>
                            <h3>{current.name}</h3>
                            <p>Price: {current.price}₸</p>
                            <p>Total: {current.price * current.qty}₸</p>
                          </div>

                          <div className='quantity'>
                            <button className='incr' onClick={() => incqty (current)}>+</button>
                            <input type='number' value={current.qty} />
                            <button className='decr' onClick={() => decqty (current)}>-</button>
                          </div>

                          <div className='icon'>
                            <div className='icon-box' onClick={() => removeProd(current)}>
                              <IoMdCloseCircle />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

            <div className='bottom'>
              {
                cart.length > 0 && 
                <>
                  <div className='total'>
                    <h4>Sub total: {total}₸</h4>
                  </div>

                  <button>checkout</button>
                </> 
              }
            </div>
        </main>
    </>
  )
}

export default Cart;