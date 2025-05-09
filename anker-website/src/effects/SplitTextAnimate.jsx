import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"

const SplitTextAnimate = ({ text = "", className = "", onComplete, trigger = false }) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!trigger) return

    const letters = ref.current.querySelectorAll(".letter")
    gsap.to(letters, {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      onComplete,
    })
  }, [trigger])

  return (
    <h1 ref={ref} className={`${className} font-extrabold text-[10vw] tracking-tighter`}>
      {text.split("").map((char, i) =>
        char === " " ? " " : (
          <span key={i} className="letter inline-block">
            {char}
          </span>
        )
      )}
    </h1>
  )
}

export default SplitTextAnimate
