import { NavLink } from "react-router-dom"
import ankerLogo from "../../assets/vectors/WhiteAnkerLogo.svg"
const Header = () => {
    const headers = ['Bilder Hochladen', 'Kanban', 'Kalendar']
  return (
    <header className="w-64 h-full bg-gray-800 p-6 flex flex-col">
    <img src={ankerLogo} alt="Anker Logo" className="mb-4"/>
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