/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div id='navigator'>
        <div className='Header-Logo'>
          <img
            width={40}
            height={40}
            src='https://seeklogo.com/images/B/bmw-m-logo-1CC2921034-seeklogo.com.png'
          />
          <h3>BMW Motorrad</h3>
        </div>

        <div className='reusable-compo'>
          <Link to={'/'}>Home</Link>
          <Link to={'/mentor'}>Mentor</Link>
          <Link to={'/contact'}>Contact </Link>
        </div>
        <div className='Header-buttons'>
          <button>Log in</button>
          <fieldset src='https://www.bmw-motorrad.com/en/home.html'>
            <a> --Go to store</a>
          </fieldset>
        </div>
      </div>
    </>
  )
}

export default Header
