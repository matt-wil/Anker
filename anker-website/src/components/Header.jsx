import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between'>
        <Logo />
        <Nav />
    </header>
  )
}

export default Header