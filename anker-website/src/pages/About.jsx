import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedVideo } from "@cloudinary/react"
import { Quality } from "@cloudinary/url-gen/qualifiers"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger" 
import { useTranslation } from "react-i18next"

gsap.registerPlugin(SplitText, ScrollTrigger)


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  }
})

const bgVideo = cld.video("splash2_jx9amn").format(auto()).quality(Quality.auto())


const About = () => {
  const {t} = useTranslation()
  const headerRef = useRef(null)
  
useGSAP(() => {
  let split = SplitText.create(".about-header",{
    type: "chars",
  })

  document.fonts.ready.then(() => {
    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random"
      },
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
        // markers: true
      }
    })

  })
}, [])


  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <AdvancedVideo
          cldVid={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-[#1b2a30] px-6 py-32">
        <h1 ref={headerRef} className="about-header text-6xl sm:text-9xl font-bold mb-4">{t("about.header")}</h1>
        <h2 className="text-3xl mb-4">{t('about.subHeader')}</h2>
        <div className="md:max-w-[75dvw] w-auto">
          <div className="m-6 max-w-150 text-center">{t("about.text1")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text2")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text3")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text4")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text5")}</div>
        </div>
      </div>
    </div>
  )
}

export default About