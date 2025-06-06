import { NavLink } from "react-router-dom"

const Header = () => {
    const headers = ['Artists', 'Portfolio Bilder', 'Aktionen', 'Termine']
  return (
    <header>
        <nav>
            <ul className="flex flex-row gap-4 justify-center items-center m-4">
                {headers.map((header, index) => <NavLink key={index}>{header}</NavLink>)}
            </ul>
        </nav>
    </header>
  )
}

export default Header