import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'


const navLinkStyle = ({ isActive }) =>
  `rounded group relative pb-1 transition-all duration-300 transform ${
    isActive ? 'text-gray-500 after:scale-x-100' : 'after:scale-x-0'
  } hover:scale-[1.025] hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-black after:origin-left`


const NavLinks = () => {
  return (
    <>
      <NavLink className={navLinkStyle} to="/home" end>Home</NavLink>
      <NavLink className={navLinkStyle} to="tattoo">Tattoo</NavLink>
      <NavLink className={navLinkStyle} to="piercing">Piercing</NavLink>
      <NavLink className={navLinkStyle} to="contact">Kontakt</NavLink>
      <NavLink className={navLinkStyle} to="team">Team</NavLink>
      <NavLink className={navLinkStyle} to="datenschutz">Datenschutz</NavLink>
      <NavLink className={navLinkStyle} to="impressum">Impressum</NavLink>
      <NavLink className={navLinkStyle} to="aktionen">Aktionen</NavLink>
      <NavLink className={navLinkStyle} to="faq">FAQ</NavLink>
    </>
  )
}

const ExtraMainNavLinks = () => {
  return (
    <>
      <NavLink className={navLinkStyle} to="team">Team</NavLink>
      <NavLink className={navLinkStyle} to="aktionen">Aktionen</NavLink>
      <NavLink className={navLinkStyle} to="faq">FAQ</NavLink>
      <NavLink className={navLinkStyle} to="datenschutz">Datenschutz</NavLink>
      <NavLink className={navLinkStyle} to="impressum">Impressum</NavLink>
    </>
  )
}

const MainNavLinks = ({toggleMainBarNav, isMainOpen}) => {
  return (
    <>
      <NavLink className={navLinkStyle} to="/home" end>Home</NavLink>
      <NavLink className={navLinkStyle} to="tattoo">Tattoo</NavLink>
      <NavLink className={navLinkStyle} to="piercing">Piercing</NavLink>
      <NavLink className={navLinkStyle} to="contact">Kontakt</NavLink>
      <div className='relative'>
      <button className="cursor-pointer" onClick={toggleMainBarNav}>{isMainOpen ? <X /> : <Menu/>}</button>
      {isMainOpen && (
        <div className='bg-white/60 pl-2 absolute flex flex-col gap-2 mr-5 top-8 left-0 mt-1 py-2 w-32 z-10'>
          <ExtraMainNavLinks />
       </div>)}
       </div>
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMainOpen, setIsMainOpen] = useState(false)

  const toggleMainNavbar = () => {
    setIsMainOpen(!isMainOpen)
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='flex w-1/3 justify-evenly'>
        <div className='hidden w-full justify-evenly gap-5 md:flex mr-5'>
          <MainNavLinks toggleMainBarNav={toggleMainNavbar} isMainOpen={isMainOpen}/>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X className='hover:cursor-pointer'/> : <Menu className='hover:cursor-pointer'/>}
          </button>
        </div>
     </nav>
     {isOpen && (
       <div className='flex basis-full flex-col items-center'>
         <NavLinks />
       </div>
     )}
    </>

  )
}

export default Nav