import React from 'react';
import Logo from '../Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='bg-white/60 sticky top-0 z-[40] mx-auto flex w-full flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Logo className="hover:cursor-pointer m-5 h-16 w-16 sm:ml-6"/>
        <Nav />
    </header>
  );
};

export default Header;