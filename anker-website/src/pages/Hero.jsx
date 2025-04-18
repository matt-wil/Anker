import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router-dom'


const Hero = () => {

  const comp = useRef(null)

  useGSAP(() => {
      const t1 = gsap.timeline()
        t1.from(".home-img", {
          xPercent: "-10",
          duration: 2,
          stagger: 0.5,
          ease: "power3.inOut",
        }).to(".home-img", {
          xPercent: "0",
          duration: 2,
          stagger: 0.5,
          ease: "power3.inOut",
        })
  },[])

  return (
    <>
      <div className='flex flex-row gap-10 h-screen' ref={comp}>
        <div className='flex m-10 p-10'>
          <h1 className='kollektif-bold text-9xl leading-tight '>Anker<br/>Freiburg</h1>
        </div>
        <div className='flex flex-col items-end'>
          <img 
          className="home-img w-100 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="home-img w-150 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="home-img w-100 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
          <img 
          className="home-img w-75 h-50 rounded-md shadow-md max-w-full" 
          src="https://picsum.photos/200/300?grayscale"
          alt="images"
          >

          </img>
        </div>
      </div>
      <div className='flex flex-col justify-start m-10 p-10 max-w-150 '>
          <p className="text-lg">Willkommen bei Anker Tattoo & Piercing in Freiburg. Wir bieten professionelle und hochwertige Tattoos sowie Piercings in einem hygienischen und kreativen Umfeld. Bei uns stehen Ihre individuellen Wünsche und Ihre Zufriedenheit an erster Stelle.</p>
          </div>
        <div className='flex justify-start items-center p-10 m-10'>          
        <Link to="contact"><button className='white-glowing-button'>Kontakt</button></Link>
        </div>
    </>
  )
}

export default Hero