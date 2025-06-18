import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useNavigate } from "react-router-dom"
import SplitTextAnimate from "../effects/SplitTextAnimate"

const Welcome = () => {
  const comp = useRef(null)
  const navigate = useNavigate()
  const [startSplitAnim, setStartSplitAnim] = useState(false)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
        .from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5
        })
        .to('#intro-slider', {
          xPercent: "-100",
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => setStartSplitAnim(true)
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className='relative' ref={comp}>
      <div id="intro-slider"
           className='h-screen kollektif font-p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight'>
        <h1 id="title-1" className='mt-10 ml-10 text-6xl md:text-9xl'>Tattoo</h1>
        <h1 id="title-2" className='ml-10 text-6xl md:text-9xl'>Piercing</h1>
        <h1 id="title-3" className='ml-10 text-6xl md:text-9xl'>Beratung</h1>
      </div>

      <div className='h-dvh w-dvw flex bg-gray-950 justify-center items-center'>
        <SplitTextAnimate
          text="Dein Anker"
          className='dein-anker kollektif-bold text-6xl md:text-9xl font-bold text-white tracking-tighter'
          onComplete={() => navigate("/home")}
          trigger={startSplitAnim}
        />
      </div>
    </div>
  )
}

export default Welcome
