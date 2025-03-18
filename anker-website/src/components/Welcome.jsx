import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import AnimatedSplitLink from "../effects/AnimatedSplitLink"

const Welcome = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let cxt = gsap.context(() => {
      const t1 = gsap.timeline()
        t1.from("into-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
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


  return (
    <div className='relative' ref={comp}>
    <div id="intro-slider"
         className='h-screen p-10 bg-gray-50 absolute top-0 left-0 font-grotesk z-10 w-full flex flex-col gap-10 tracking-tight'>

      <h1 id="title-1" className='text-9xl'>Tattoo</h1>
      <h1 id="title-2" className='text-9xl'>Piercing</h1>
      <h1 id="title-3" className='text-9xl'>Cosmetic</h1>
    </div>


      <div className='h-screen flex bg-gray-950 justify-center place-items-center'>
          <AnimatedSplitLink>
            <h1 className='text-9xl font-bold text-white font-grotesk hover:cursor-pointer'>
            <Link to="/home">Dein Anker</Link>
            </h1>
          </AnimatedSplitLink>
      </div>
    </div>
  )
}

export default Welcome