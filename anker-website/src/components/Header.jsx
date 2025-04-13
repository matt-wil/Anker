import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Logo />
        <Nav />
    </header>
  );
};

export default Header;