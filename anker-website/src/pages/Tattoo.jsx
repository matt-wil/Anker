import { getArtistsByProfession } from "../api/artists"
import ArtistCard from "../components/ArtistCard"
import { useState, useEffect } from "react";
import AniTitle from "../effects/AniTitle";


export default function Tattooists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtistsByProfession('Tattooist').then(setArtists);
  }, []);


  return (
    <div className="p-8">
      <AniTitle 
        title="Tattoo Artists" 
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-bold mb-10">
      </AniTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {artists.map(artist => (
          <ArtistCard key={artist.artist_id} artist={artist} />
        ))}
      </div>
    </div>
  );
} 