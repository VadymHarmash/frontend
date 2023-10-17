import React from 'react'
import Logo from './Logo'
import Links from './Links'
import Buttons from './Buttons'

export default function Header({total}) {
  return (
    <>
      <Logo />
      <Links />
      <Buttons count={total}/>
    </>
  )
}
