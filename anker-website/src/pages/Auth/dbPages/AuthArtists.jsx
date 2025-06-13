import AuthUploadWidget from "../dbComponents/AuthUploadWidget"


const AuthArtists = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center m-10">Upload a new Artist to your Website</h1>
      <AuthUploadWidget />
    </div>
  )
}

export default AuthArtists