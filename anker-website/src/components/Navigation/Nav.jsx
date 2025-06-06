import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


const navLinkStyle = ({ isActive }) =>
  `rounded group relative pb-1 transition-all duration-300 transform ${
    isActive ? 'text-gray-500 after:scale-x-100' : 'after:scale-x-0'
  } hover:scale-[1.025] hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-black after:origin-left`

  

const NavLinks = () => {
  const {t} = useTranslation()
  return (
    <>
      <NavLink className={navLinkStyle} to="/home" end>{t("nav.home")}</NavLink>
      <NavLink className={navLinkStyle} to="tattoo">{t("nav.tattoo")}</NavLink>
      <NavLink className={navLinkStyle} to="piercing">{t("nav.piercing")}</NavLink>
      <NavLink className={navLinkStyle} to="contact">{t("nav.contact")}</NavLink>
      <NavLink className={navLinkStyle} to="datenschutz">{t("nav.data")}</NavLink>
      <NavLink className={navLinkStyle} to="impressum">{t("nav.legal")}</NavLink>
      <NavLink className={navLinkStyle} to="aktionen">{t("nav.promo")}</NavLink>
      <NavLink className={navLinkStyle} to="faq">{t("nav.faq")}</NavLink>
    </>
  )
}

const ExtraMainNavLinks = () => {
  const {t} = useTranslation()
  return (
    <>
      <NavLink className={navLinkStyle} to="aktionen">{t("nav.promo")}</NavLink>
      <NavLink className={navLinkStyle} to="faq">{t("nav.faq")}</NavLink>
      <NavLink className={navLinkStyle} to="datenschutz">{t("nav.data")}</NavLink>
      <NavLink className={navLinkStyle} to="impressum">{t("nav.legal")}</NavLink>
    </>
  )
}

const MainNavLinks = ({toggleMainBarNav, isMainOpen}) => {
  const {t} = useTranslation()
  return (
    <>
      <NavLink className={navLinkStyle} to="/home" end>{t("nav.home")}</NavLink>
      <NavLink className={navLinkStyle} to="tattoo">{t("nav.tattoo")}</NavLink>
      <NavLink className={navLinkStyle} to="piercing">{t("nav.piercing")}</NavLink>
      <NavLink className={navLinkStyle} to="contact">{t("nav.contact")}</NavLink>
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