import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavLinks = () => {
  return (
    <>
      <NavLink className="hover:animate-pulse" to="tattoo">Tattoo</NavLink>
      <NavLink className="hover:animate-pulse" to="piercing">Piercing</NavLink>
      <NavLink className="hover:animate-pulse" to="contact">Kontakt</NavLink>
      <NavLink className="hover:animate-pulse" to="team">Team</NavLink>
      <NavLink className="hover:animate-pulse" to="about">Über uns</NavLink>
      <NavLink className="hover:animate-pulse" to="/home">Home</NavLink>
      <NavLink className={"hover:animate-pulse"} to="datenschutz">Datenschutz</NavLink>
      <NavLink className={"hover:animate-pulse"} to="impressum">Impressum</NavLink>
      <NavLink className={"hover:animate-pulse"} to="events-calendar">Events</NavLink>
    </>
  )
}

const ExtraMainNavLinks = () => {
  return (
    <>
      <NavLink className="hover:animate-pulse" to="team">Team</NavLink>
      <NavLink className="hover:animate-pulse" to="about">Über uns</NavLink>
      <NavLink className={"hover:animate-pulse"} to="events-calendar">Events</NavLink>
    </>
  )
}

const MainNavLinks = ({toggleMainBarNav, isMainOpen}) => {
  return (
    <>
      <NavLink className="hover:animate-pulse" to="/home">Home</NavLink>
      <NavLink className="hover:animate-pulse" to="tattoo">Tattoo</NavLink>
      <NavLink className="hover:animate-pulse" to="piercing">Piercing</NavLink>
      <NavLink className="hover:animate-pulse" to="contact">Kontakt</NavLink>
      <div className='relative'>
      <button className="cursor-pointer" onClick={toggleMainBarNav}>{isMainOpen ? <X /> : <Menu/>}</button>
      {isMainOpen && (
        <div className='absolute flex flex-col gap-2 mr-5 top-8 left-0 mt-1 py-2 w-32 z-10'>
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
            {isOpen ? <X /> : <Menu />}
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