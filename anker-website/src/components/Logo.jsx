import { Link } from "react-router-dom"
import myLogo from "../assets/BlackAnkerLogo.svg"

const Logo = () => {
  return (
    <div className='m-20 p-20 h-16 w-16 ml-4 sm:ml-6 lg:ml-8'>
      <Link to="/"><img src={myLogo} alt="tattoo gun" /></Link>
    </div>
  )
}

export default Logo