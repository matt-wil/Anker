import { getArtistsByProfession } from "../api/artists"
import { Link } from "react-router-dom"
import ArtistCard from "../components/ArtistCard"
import { useState, useEffect } from "react";

export default function Tattooists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtistsByProfession('Tattooist').then(setArtists);
  }, []);
  console.log(artists)


  return (
    <div className="p-8">
      <h1 className="text-7xl text-center font-bold mb-10">Tattoo Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map(artist => (
          <ArtistCard key={artist.artist_id} artist={artist} />
        ))}
      </div>
    </div>
  );
} 