import { useRef } from "react"
import { Link } from 'react-router-dom'
import ankerGun from "../assets/images/anker_tattoo_gun.jpg"
import ankerDesk from "../assets/images/ankerDesk.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollPage from "../components/ScrollPage"



const Hero = () => {
  const imageRef = useRef(null)
  
  useGSAP(() => {
    gsap.from(imageRef.current, {
      x: -400,
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    })
  },[])

  return (
    <>
      <div className='grid xl:grid-cols-2'>
        <div className='flex flex-col p-2 m-2 sm:m-10 sm:p-10'>
          <h1 className='kollektif-bold text-6xl 2xl:text-[200px] sm:text-9xl leading-tight '>Anker<br />Freiburg</h1>
          <p className="mt-5 sm:text-m 2xl:text-lg">Willkommen bei Anker Tattoo & Piercing in Freiburg. Wir bieten hochwertige Tattoos sowie professionell gestochene Piercings in einem hygienischen und kreativen Umfeld. Bei uns stehen deine individuellen Wünsche und deine Zufriedenheit an erster Stelle.</p>
          <div className='flex justify-center items-center p-2 m-2 sm:p-10 sm:m-10'>          
        <Link to="contact"><button className='white-glowing-button'>Kontakt</button></Link>
        </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            ref={imageRef}
            className="hero-img-clip-path max-sm:mx-5 max-sm:my-2 sm:w-full grayscale hover:grayscale-0" 
            src={ankerDesk}
            alt="images"
          />
        </div>
      </div>
      <section className="w-dvw h-dvh">
        <ScrollPage />
      </section>
    </>
  )
}

export default Hero