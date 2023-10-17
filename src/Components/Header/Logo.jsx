import React from 'react'
import logo from './../../assets/icons/logo.svg'

export default function Logo() {
  return (
    <div className='header__logo'>
        <img src={logo} alt="Logo" />
        <p>Organick</p>
    </div>
  )
}
