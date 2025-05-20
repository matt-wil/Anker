import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedVideo } from "@cloudinary/react"
import { Quality } from "@cloudinary/url-gen/qualifiers"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

gsap.registerPlugin(SplitText, ScrollTrigger)


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  }
})

const bgVideo = cld.video("splash2_jx9amn").format(auto()).quality(Quality.auto())


const About = () => {
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
        <h1 ref={headerRef} className="about-header text-6xl sm:text-9xl font-bold mb-10">Über uns</h1>
        <p className="max-w-4xl text-lg text-center leading-relaxed">
        In unserem, auf nationalen und internationalen Tattooconventions ausgezeichneten Studio findet seit Dezember 2011 jeder seinen privaten Schatz, egal ob Piercing oder Tattoo.
Im Herzen des idyllischen Freiburg gelegen, findet ihr unser Studio nahe dem Martinstor, nur ein paar Schritte von der S-Bahn-Haltestelle „Holzmarkt“ sowie lediglich einige Gehminuten vom Hauptbahnhof entfernt. Um die Ecke befinden sich auch zwei Parkhäuser, für all diejenige unter euch, die mit dem Auto anreisen. 
<br /><br />

In einer lockeren familiären Atmosphäre bieten wir euch eine fachmännische Beratung sowie selbstverständlich professionelles und hygienisches Arbeiten.
<br /><br />

Bei uns wird jede Tattoostilrichtung gestochen und jede noch so verrückte Idee ist willkommen, die wir dann im Gespräch mit euch zusammen besprechen, um Fragen sowie Details zu klären. Jedes Motiv wird nach euren individuellen Wünschen gestaltet, damit ihr auch ein Unikat auf der Haut tragt.
<br /><br />
Des weiteren haben wir mehrere regelmäßig wiederkommende Gasttätowierer zu Besuch, die alle ihren eigenen Stil und ihr Können mitbringen.
<br /><br />
Jedes Jahr Anfang Dezember feiern wir unseren Studiogeburtstag mit Snacks, Getränken sowie diversen Aktionen, wie z.B. alle Piercings zum halben Preis, Walk-in Tattoos und Vergünstigungen bei einer Terminvereinbarung für ein Tattoo.
<br /><br />
Zu besonderen Anlässen veranstalten wir gelegentlich auch Walk-in Tage. Bisher waren das u.a. Halloween oder der Star-Wars-Day. Hierfür fertigen unsere Künstler themenspezifische Motive an, die man sich dann spontan noch am Tag selben stechen kann!
<br /><br />
Bei Interesse, Fragen oder aus Neugier: Nehmt telefonisch oder per Mail Kontakt mit uns auf! Wir freuen uns auf euch!
<br /><br />
Eure Anker-Crew
        </p>
      </div>
    </div>
  )
}

export default About