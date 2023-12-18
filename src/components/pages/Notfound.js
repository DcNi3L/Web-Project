import React from 'react'

//css
import './Notfound.css';

const Notfound = () => {
  return (
    <>
      <main className='error'>
        <div className='error_con'>
          <div className='img-box'>
            <img src='images/404-errors.png' alt=''></img>
          </div>
        </div>
      </main>
    </>
  )
}

export default Notfound;