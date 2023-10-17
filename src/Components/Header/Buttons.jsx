import React from 'react'
import search from './../../assets/icons/search.svg'
import cart from './../../assets/icons/cart.svg'
import { NavLink } from 'react-router-dom'

export default function Buttons({ count }) {
  return (
    <div className='header__buttons'>
      <div className='header__buttons__button search'>
        <img src={search} alt="Search" />
      </div>
      <NavLink to='/cart' className="cart-link">
        <div className='header__buttons__button cart'>
          <img src={cart} alt="Cart" />
          <p>Cart (<span className={count > 0 ? 'active' : ''}>{count}</span>)</p>
        </div>
      </NavLink>
    </div>
  )
}
