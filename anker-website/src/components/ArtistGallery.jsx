import { useState, useEffect } from 'react'
import { getPortfolioImagesByArtistId } from '../api/portfolioImages'
import ImageCard from './ImageCard'
import { useLocation, useParams } from 'react-router-dom'


const ArtistGallery = () => {
    const { artist_id } = useParams()
    const { state } = useLocation()
    const artistName = state?.artistName || 'Unknown Artist'
    
    const [images, setImages] = useState([])

    useEffect(() => {
        getPortfolioImagesByArtistId(Number(artist_id)).then(setImages)
    }, [artist_id])

    console.log(images)
    console.log(artistName)
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-5 max-h-50vh'>
            {images.map(image => (
                <ImageCard
                    key={image.image_id}
                    src={image.image_url}
                    alt={image.description || 'Portfolio Image'}
                    artistName={artistName}
                />

            ))}
    </div>
  )
}

export default ArtistGallery