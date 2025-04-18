import { useState } from 'react';
import { Link } from 'react-router-dom';


const ArtistCard = ({ artist }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`/images/artists/${artist.name}/${artist.profile_image}`}
        alt={artist.name}
        className='w-full h-64 object-cover rounded-t-2xl'
      />
      <div className='p-4'>
        <h2 className='text-4xl font-semibold text-center'>{artist.name}</h2>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-white/60 bg-opacity-70 text-black flex flex-col justify-end p-4 transition-opacity duration-300">
          <p className="mb-4 text-sm">{artist.bio}</p>
          <Link
            to={`/artists/${artist.artist_id}/gallery`}
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