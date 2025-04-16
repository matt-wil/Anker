import Video from '../components/Video'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/*<div className='flex justify-center mb-0'><Video /></div> */}
      <div className='flex flex-row justify-center items-center h-screen' >
        <div className='flex flex-col justify-center items-center'>
          <div className=''>
            <h1 className='body-noto text-9xl font-bold  '>Anker<br/>Freiburg</h1>
          </div>
            <div className='max-w-150'>
              <p className="text-lg heading-grotesk bg-none">Willkommen bei Anker Tattoo & Piercing in Freiburg. Wir bieten professionelle und hochwertige Tattoos sowie Piercings in einem hygienischen und kreativen Umfeld. Bei uns stehen Ihre individuellen Wünsche und Ihre Zufriedenheit an erster Stelle.</p>
            </div>
            <div>          
              <Link to="contact"><button className='white-glowing-button'>Kontakt</button></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home