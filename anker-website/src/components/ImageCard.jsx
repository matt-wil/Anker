const ImageCard = ({ src, alt, artistName }) => {

  return (
    <>
        <div className=''>
            <img 
                src={`/images/artists/${artistName}/${src}`} 
                alt={alt} 
                className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
        </div>
    </>
  )
}

export default ImageCard