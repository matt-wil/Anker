export async function getArtistsByProfession(profession){
    if (!profession) {
        throw new Error('Profession is required');
    }
    const response = await fetch(`${import.meta.env.VITE_ANKER_API}/api/artists`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const filteredArtists = data.filter(artist => artist.profession === profession)
    return filteredArtists;
}