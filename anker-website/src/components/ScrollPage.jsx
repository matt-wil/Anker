import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import piercingNeedle from "../assets/images/needle.webp"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollPage() {
  const {t} = useTranslation()
  const words = [t("scrollPage.needle1"), t("scrollPage.needle2"), t("scrollPage.needle3")]

  useGSAP(() => {
    const needles = gsap.utils.toArray(".box")
    const labels = gsap.utils.toArray(".label")

    needles.forEach((el, i) => {
      // Needle slide
      gsap.fromTo(
        el,
        { x: -200 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
          ease: "power2.out",
        }
      )

      // Label reveal
      gsap.fromTo(
        labels[i],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 35%",
            toggleActions: "play none none reverse",
          }
        }
      )
    })
  }, [])

  return (
    <>
      <section className="bg-[#1B2A30] py-20">
        <div className="space-y-20 ml-10">
          {words.map((word, i) => (
            <div key={i} className="flex items-center gap-6 min-w-[300px]">
              <div className="box w-20 h-60 overflow-hidden transform rotate-[270deg]">
                <img
                  src={piercingNeedle}
                  alt={`Needle ${i + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="label opacity-0 text-white text-3xl sm:text-7xl font-bold ml-20">
                {word}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

