import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"


const AniTitle = ({title, className}) => {
    useGSAP(() => {
        let split = SplitText.create(".header",{
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
          })
    
        })
    },[])

  return (
    <h1 
        className={`header ${className}`}
        aria-label={title}
    >
        {title}
    </h1>
  )
}

export default AniTitle