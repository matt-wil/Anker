import Video from '../components/Video'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/*<div className='flex justify-center mb-0'><Video /></div> */}
      <div className='flex flex-row justify-center items-center h-screen gap-10 max-w-screen sm:gap-5 sm:flex-wrap'>
        <Link to="tattoo">
          <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
            <h1 className='text-7xl'>Tattoo</h1>
          </div>
        </Link>
        <Link to="piercing">
          <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
            <h1 className='text-7xl'>Piercing</h1>
          </div>
        </Link>
        <Link to="beratung">
          <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
            <h1 className='text-7xl'>Beratung</h1>
          </div>
        </Link>
        <Link to="team">
          <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
            <h1 className='text-7xl'>Team</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home