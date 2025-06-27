import { Link } from "react-router-dom"
import myLogo from "../assets/vectors/BlackAnkerLogo.svg"
import whiteLogo from "../assets/vectors/WhiteAnkerLogo.svg"

const Logo = ({className, color = "white"}) => {
  const logo = color === "white" ? whiteLogo : myLogo
  return (
      <Link 
        to="/"
      >
      <img 
        src={logo} 
        alt="Anker Logo" 
        className={className}/></Link>
  )
}

export default Logo