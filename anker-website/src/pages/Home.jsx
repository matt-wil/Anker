import Video from '../components/Video'

const Home = () => {
  return (
    <>
      {/*<div className='flex justify-center mb-0'><Video /></div> */}
      <div className='flex flex-row justify-center items-center h-screen gap-10'>
        <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
          <h1 className='text-7xl'>Tattoo</h1>
        </div>
        <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
          <h1 className='text-7xl'>Piercing</h1>
        </div>
        <div className='bg-gray-950 border rounded border-gray-950 m-10 p-5'>
          <h1 className='text-7xl'>Team</h1>
        </div>
      </div>
    </>
  )
}

export default Home