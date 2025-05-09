import { Link } from "react-router-dom"
import myLogo from "../assets/vectors/BlackAnkerLogo.svg"

const Logo = ({className}) => {
  return (
      <Link 
        to="/"
      >
      <img 
        src={myLogo} 
        alt="Anker Logo" 
        className={className}/></Link>
  )
}

export default Logo