import AuthUploadWidget from "../dbComponents/AuthUploadWidget"
import CloudUploadForm from "../dbComponents/CloudUploadForm"

const AuthArtists = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center m-10">Upload a new Artist to your Website</h1>
      <CloudUploadForm />
      <AuthUploadWidget />
    </div>
  )
}

export default AuthArtists