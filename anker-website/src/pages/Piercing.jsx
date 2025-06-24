import { getArtistsByProfession } from "../api/artists"
import ArtistCard from "../components/ArtistCard"
import { useState, useEffect, useRef } from "react";
import AniTitle from "../effects/AniTitle";
import { useTranslation } from "react-i18next"
import PiercingList from "../components/PiercingList";


export default function Tattooists() {
  const [artists, setArtists] = useState([]);
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);
  const piercingListRef = useRef(null);
  const {t} = useTranslation()

  useEffect(() => {
    getArtistsByProfession('Piercer').then(setArtists);
  }, []);
   
  const handlePriceListClick = () => {
    setIsPriceListOpen(prev => !prev);
  }

  useEffect(() => {
    if (isPriceListOpen && piercingListRef.current) {
      piercingListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })


  return (
    <div className="p-8">
      <AniTitle 
        title="Professional Body Piercers" 
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-bold mb-10">
      </AniTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map(artist => (
          <ArtistCard key={artist.artist_id} artist={artist} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handlePriceListClick} className="white-glowing-button m-10">{t("piercingPriceList.title")}</button>
      </div>
      <div ref={piercingListRef}>
      {isPriceListOpen &&
          <PiercingList />
        }
      </div>
    </div>
  );
} 