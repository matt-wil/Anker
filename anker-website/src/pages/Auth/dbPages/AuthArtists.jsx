import AuthUploadWidget from "../dbComponents/AuthUploadWidget"
import CloudUploadForm from "../dbComponents/CloudUploadForm"
import { useState } from "react"

const AuthArtists = () => {
  const [cloudinaryFilePath, setCloudinaryFilePath] = useState("");


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center m-10">Upload a new Artist to your Website</h1>
      <CloudUploadForm setFilePath={setCloudinaryFilePath} />
      <AuthUploadWidget cloudinaryFolderPath={cloudinaryFilePath}/>
    </div>
  )
}

export default AuthArtists