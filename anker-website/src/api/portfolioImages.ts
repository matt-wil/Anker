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

type PortfolioImage = {
    image_id: number
    artist_id: number
    image_url: string
    description: string
    category: string
    upload_date: string
}

type PortfolioImagesList = PortfolioImage[]

export async function getPortfolioImagesByArtistId(artist_id: number):Promise<PortfolioImagesList> {
    const response = await fetch(`http://127.0.0.1:5001/api/portfolio_images/by_artist`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const portfolioImagesByArtistId = data.filter((portfolioImage: { artist_id: number }) => portfolioImage.artist_id === artist_id);
    return portfolioImagesByArtistId;

}