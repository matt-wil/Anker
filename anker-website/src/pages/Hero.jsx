import { useRef } from "react"
import { Link } from 'react-router-dom'
import ankerDesk from "../assets/images/ankerDesk.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollPage from "../components/ScrollPage"
import About from "./About"
import { useTranslation } from "react-i18next"



const Hero = () => {
  const { t } = useTranslation() 
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
          <h1 className='kollektif-bold text-6xl 2xl:text-[200px] sm:text-9xl leading-tight'>Anker<br />Freiburg</h1>
          <p className="mt-5 sm:text-m 2xl:text-lg">{t("hero.intro")}</p>
          <h2 className="text-3xl kollektif-bold mt-4">{t("hero.introEnd")}</h2>
          <div className='flex justify-center items-center p-2 m-2 sm:p-10 sm:m-10'>          
        <Link to="contact"><button className='white-glowing-button'>{t("hero.button")}</button></Link>
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
      <section>
        <ScrollPage />
      </section>
      <section>
        <About />
      </section>
    </>
  )
}

export default Hero