import Logo from '../Logo';
import Nav from './Nav';
import Lang from './Lang'

const Header = () => {
  return (
    <header className='bg-[#c2f9eb]/40 sticky top-0 z-[40] flex w-full flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Logo className="hover:cursor-pointer m-5 h-16 w-16 sm:ml-6"/>
        <Nav />
        <Lang />
    </header>
  );
};

export default Header;