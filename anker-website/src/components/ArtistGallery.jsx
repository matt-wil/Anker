import { useState, useEffect } from 'react'
import { getPortfolioImagesByArtistId } from '../api/portfolioImages'
import ImageCard from './ImageCard'
import { useLocation, useParams } from 'react-router-dom'
import FullscreenModel from './FullscreenModel'


const ArtistGallery = () => {
    const { artist_id } = useParams()
    const { state } = useLocation()
    const artistName = state?.artistName || 'Unknown Artist'
    
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        getPortfolioImagesByArtistId(Number(artist_id)).then(setImages)
    }, [artist_id])

  return (
    <>
    <div className='text-4xl sm:text-7xl text-center mb-5'>
      <h1>{artistName}s Portfolio</h1>
    </div>
    <div className='flex flex-row flex-wrap justify-center items-center gap-5 max-h-50vh'>
            {images.map(image => (
                <ImageCard
                    key={image.image_id}
                    src={image.image_url}
                    alt={image.description || 'Portfolio Image'}
                    onClick={() => setSelectedImage(image.image_url)}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                />
            ))}

            <FullscreenModel imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
    </>
  )
}

export default ArtistGallery