import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import piercingNeedle from "../assets/images/needle.webp"
import ankerGun from "../assets/images/ankerTattooGun.jpg"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollPage() {

  useGSAP(() => {
    // Animate boxes horizontally
    gsap.utils.toArray(".box").forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: -200, },
        {
          x: "+=200",
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          ease: "power2.out",
          delay: i * 0.2,
        }
      )
    })
  }, [])

  return (
    <>
      <section className="bg-[#1B2A30] py-20">
        <div className="space-y-20 ml-10">
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              className="box w-20 h-60 overflow-hidden transform rotate-[270deg]"
            >
              <img
                src={piercingNeedle}
                alt={`Needle ${i + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="scroll-page"
        className="relative w-full h-[140vh] overflow-hidden"
      >
        <h1 className="text-4xl sm:text-9xl font-bold text-center m-10">Dein Anker</h1>
      </section>
    </>
  )
}
