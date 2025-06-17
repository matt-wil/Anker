import AuthUploadWidget from "../dbComponents/AuthUploadWidget"
import CloudUploadForm from "../dbComponents/CloudUploadForm"
import { useState } from "react"

const AuthUpload = () => {
  const [cloudinaryFilePath, setCloudinaryFilePath] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [category, setCategory] = useState("");


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center m-10">Lade ein neues Bild zu Cloudinary Hoch</h1>
      <CloudUploadForm 
        setFilePath={setCloudinaryFilePath}
        setImageDescriptionProp={setImageDescription}
        setCategoryProp={setCategory}
        imageDescription={imageDescription}
        category={category}
         />
      <AuthUploadWidget 
        cloudinaryFolderPath={cloudinaryFilePath}
        description={imageDescription}
        category={category}
        />
    </div>
  )
}

export default AuthUpload