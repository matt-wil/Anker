import { useState } from "react"
import ImageCard from "../components/ImageCard"
import FullscreenModel from "../components/FullscreenModel"
import AniTitle from "../effects/AniTitle"
import { useTranslation } from "react-i18next"

const Aktionen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { t } = useTranslation()
  
  return (
    <div className="p-8">
      <AniTitle title={t("nav.promo")} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-bold mb-10"></AniTitle>
        <div className="flex justify-center items-center gap-5 mt-15">
          <ImageCard 
            src="https://res.cloudinary.com/dcrmzq3wo/image/upload/v1747811557/Aktion1_yehtvq.png"
            alt="Anker Freiburg Tattoo & Piercing Aktion und Veranstaltungen"
            className="w-auto"
            onClick={() => setSelectedImage("https://res.cloudinary.com/dcrmzq3wo/image/upload/v1747811557/Aktion1_yehtvq.png")}
          />
          <ImageCard 
            src="https://res.cloudinary.com/dcrmzq3wo/image/upload/v1747811562/Aktion2_ou95ft.png"
            alt="Anker Freiburg Tattoo & Piercing Aktion und Veranstaltungen"
            className="w-auto"
            onClick={() => setSelectedImage("https://res.cloudinary.com/dcrmzq3wo/image/upload/v1747811562/Aktion2_ou95ft.png")}
          />

          <FullscreenModel imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    </div>
  )
}

export default Aktionen