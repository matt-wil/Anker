import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import AnimatedSplitLink from "../effects/AnimatedSplitLink"
import {useGSAP} from "@gsap/react"
import tattooSound from "../assets/sounds/tattoomachine.mp3"

const Welcome = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let cxt = gsap.context(() => {
      const t1 = gsap.timeline()
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
          opacity: 0,
          ease: "power2.inOut",
        }).from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        }).to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5
        }).to('#intro-slider', {
          xPercent: "-100",
          duration: 2
        })
    }, comp)
    return () => cxt.revert()
  },[])

  useGSAP(() => {
    const t2 = gsap.timeline({repeat: -1, yoyo: true})
    t2.to('.dein-anker', {
      repeat: -1,
      yoyo: true,
      duration: 1,
      textShadow: "0 0 5px rgba(255, 204, 0, 0.8), 0 0 10px rgba(255, 204, 0, 0.6), 0 0 15px rgba(255, 204, 0, 0.4)",
    }).to('.dein-anker', {
      textShadow: "0 0 10px rgba(255, 204, 0, 1), 0 0 15px rgba(255, 204, 0, 0.8), 0 0 20px rgba(255, 204, 0, 0.6)",
      duration: 1
    }).to('.dein-anker', {
      scale: 1.1,
      duration: 2,
      ease: "power1.inOut"
    })
  })

  const playTattooSound = () => {
    const audio = new Audio(tattooSound);
    audio.play();
  }
  
  return (
    <div className='relative' ref={comp}>
    <div id="intro-slider"
         className='h-screen kollektif font-p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight'>

      <h1 id="title-1" className='text-9xl'>Tattoo</h1>
      <h1 id="title-2" className='text-9xl'>Piercing</h1>
      <h1 id="title-3" className='text-9xl'>Beratung</h1>
    </div>


      <div className='h-screen flex bg-gray-950 justify-center place-items-center'>
          <AnimatedSplitLink>
            <h1 className='dein-anker kollektif-bold text-9xl font-bold text-white hover:cursor-pointer'>
            <Link to="/home" onClick={playTattooSound}>Dein Anker</Link>
            </h1>
          </AnimatedSplitLink>
      </div>
    </div>
  )
}

export default Welcome