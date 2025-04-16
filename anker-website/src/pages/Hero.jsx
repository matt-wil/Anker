import Video from '../components/Video'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center gap-10 h-screen'>
        <div className='pr-8 flex flex-col justify-between'>
        <div className='max-w-150 mb-0'>
          <h1 className='body-noto text-9xl font-bold leading-tight '>Anker<br/>Freiburg</h1>
        </div>
        <div className='mt-0 max-w-150'>
          <p className="text-lg heading-grotesk">Willkommen bei Anker Tattoo & Piercing in Freiburg. Wir bieten professionelle und hochwertige Tattoos sowie Piercings in einem hygienischen und kreativen Umfeld. Bei uns stehen Ihre individuellen Wünsche und Ihre Zufriedenheit an erster Stelle.</p>
          </div>
        <div>          
        <Link to="contact"><button className='white-glowing-button'>Kontakt</button></Link>
        </div>
        </div>
        <div className='flex flex-col items-end justify-start'>
          <img 
          className="w-100 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="w-150 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="w-100 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="w-75 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
        </div>
      </div>
    </>
  )
}

export default Hero