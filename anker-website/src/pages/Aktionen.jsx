import { Cloudinary } from "@cloudinary/url-gen/index"
import { AdvancedImage } from "@cloudinary/react"

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  }
})

const Aktionen = () => {
  return (
    <>
      <h2 className="flex justify-center items-center text-7xl font-bold">Veranstaltungen</h2>
        <p>Create a Gallery Component of Event Images</p>
        <div>
          
        </div>
    </>
  )
}

export default Aktionen