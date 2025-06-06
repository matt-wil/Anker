/* Automatics are not needed to POST but will be returned for GET
{   
    "image_id": "",  // Automatic
    "artist_id": "",   // Relationship to Artist Table 
    "image_url": "",
    "description": "",
    "category": "Tattoo",
    "upload_date": "" // Automatic
}
*/

export async function getPortfolioImagesByArtistId(artist_id) {
    const response = await fetch(`${import.meta.env.VITE_ANKER_API}/api/portfolio_images/by_artist/${artist_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const portfolioImagesByArtistId = data.filter((portfolioImage)=> portfolioImage.artist_id === artist_id);
    return portfolioImagesByArtistId;
}