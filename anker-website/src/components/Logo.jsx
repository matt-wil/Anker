import { Link } from "react-router-dom"
const Logo = () => {
  return (
    <div className='logo h-12 w-12 m-5'>
      <Link to="/"><img src="./tattoo_gun.png" alt="tattoo gun" /></Link>
    </div>
  )
}

export default Logo