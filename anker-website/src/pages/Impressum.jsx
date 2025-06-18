import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'

const Impressum = () => {
  const {t} = useTranslation()
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [circleSize, setCircleSize] = useState("100px");
  const [isMaskActive, setIsMaskActive] = useState(false);
  const containerRef = useRef(null)

  const handleClick = () => {
    setCircleSize( circleSize === "100px" ? "200px" : "100px");
  }

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - left);
      setMouseY(e.clientY - top);
    }
  }

  const handleMouseEnter = () => {
    setIsMaskActive(true);
  };

  const handleMouseExit = () => {
    setIsMaskActive(false);
  };

  const clipPathStyle = {
    clipPath: isMaskActive
      ? `circle(${circleSize} at ${mouseX}px ${mouseY}px)`
      : `circle(${circleSize} at 50% 50%)`,
  }

    return (
      <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseExit={handleMouseExit}
      onClick={handleClick}
      className="relative"
      >
      <section className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">{t("impressum.header")}</h2>
          <div>
          <p className="p-5 md:px-15">{t("impressum.content")}</p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl m-10 text-center opacity-0">WE WOULD LOVE TO SEE YOU COME AND VISIT US!</h2>
      </section>
      <section className="absolute top-0 flex flex-col justify-center items-center gap-5 bg-[#c2f9eb]/40 text-[#FF8573]" style={clipPathStyle}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">{t("impressum.header")}</h2>
          <div>
          <p className="p-5 md:px-15">{t("impressum.content")}</p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl m-10 text-center">WE WOULD LOVE TO SEE YOU COME AND VISIT US!</h2>
      </section>
      </section>
    )
  }
  
  export default Impressum