import { NavLink } from "react-router-dom"
import ankerLogo from "../../assets/vectors/WhiteAnkerLogo.svg"
import Tooltip from "../../components/Tooltip.jsx"


const Header = () => {
    const headers = ['Bilder Hochladen', 'Kanban', 'Kalendar']
  return (
    <header className="sm:w-64 w-34 h-full bg-gray-800 p-6 flex flex-col">
    <Tooltip text="Click to go back to the homepage" position="right">
      <img src={ankerLogo} alt="Anker Logo" onClick={() => window.location.href = "/home"} className="mb-4 cursor-pointer"/>
    </Tooltip>
        <nav className="flex-1">
            <ul className="flex flex-col gap-4">
                {headers.map((header, index) => 
                  <NavLink
                  key={index}
                  to={`/dashboard/${header.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-gray-700 transition ${
                    isActive ? "bg-gray-700 font-semibold" : ""
                  }`
                }
              >{header}</NavLink>
                  )}
            </ul>
        </nav>
    </header>
  )
}

export default Header