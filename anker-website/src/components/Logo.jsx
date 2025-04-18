import { Link } from "react-router-dom"
import myLogo from "../assets/vectors/BlackAnkerLogo.svg"

const Logo = () => {
  return (
    <div className='m-5 h-16 w-16 sm:ml-6 lg:ml-8'>
      <Link to="/"><img src={myLogo} alt="Anker Logo" /></Link>
    </div>
  )
}

export default Logo