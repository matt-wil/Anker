import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedImage} from "@cloudinary/react"
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Resize } from "@cloudinary/url-gen/actions"
import { lazyload, responsive, placeholder } from '@cloudinary/react';
import { useTranslation } from 'react-i18next';


const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  }
})


const ArtistCard = ({ artist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { i18n } = useTranslation()
  const curentLang = i18n.language
  const bio = curentLang === "en" ? artist.bio_en : artist.bio


  // Cloudinary 
  const getPublicId = (url) => {
    const parts = url.split("/upload/")[1]
    return parts?.split(".")[0] || ""
  }

  const publicId = getPublicId(artist.profile_image)
  const cldImg = cloudinary.image(publicId).resize(Resize.scale().width(650)).format("auto")

  return (
    <div 
      className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AdvancedImage
        cldImg={cldImg}
        alt={`Anker Tattoo and Piercing Freiburg Artist ${artist.name}`}
        className='w-full h-140 lg:h-200 object-cover rounded-t-2xl'
        plugins={[lazyload(),responsive(),placeholder()]}
      />
      <div className='p-4'>
        <h2 className='text-4xl font-semibold text-center'>{artist.name}</h2>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-white/60 bg-opacity-70 text-black flex flex-col justify-end p-4 transition-opacity duration-300">
          <p className=" mt-100 mb-4 text-sm md:text-lg text-center">{bio}</p>
          <Link
            to={`/home/artists/${artist.artist_id}/gallery`}
            state={{artistName: artist.name}}
            className="mt-auto bg-white text-black text-center px-4 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            View Gallery
          </Link>
        </div>
      )}
    </div>
  )
}

export default ArtistCard