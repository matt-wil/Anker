import { AdvancedImage} from "@cloudinary/react"
import { Cloudinary } from '@cloudinary/url-gen/index';
import { lazyload, responsive, placeholder } from '@cloudinary/react';



const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  }
})

const ImageCard = ({ src, alt, className, onClick}) => {

    // Cloudinary 
    const getPublicId = (url) => {
      const parts = url.split("/upload/")[1]
      return parts?.split(".")[0] || ""
    }
  
    const publicId = getPublicId(src)
    const cldImg = cloudinary.image(publicId).format("auto").quality("auto")


  return (
    <>
      <AdvancedImage 
          cldImg={cldImg} 
          alt={alt} 
          className={`object-cover rounded-2xl shadow-2xl cursor-zoom-in ${className}`}
          plugins={[lazyload(),responsive(),placeholder()]}
          onClick={onClick}
          />
    </>
  )
}

export default ImageCard