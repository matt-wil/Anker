/**
 * DATABASE FORMAT
 *         {
            "artist_id": 1,
            "bio": "Laura ist seit 2022 als Tattoo Künstlerin tätig und hat schnell ihre Leidenschaft für florale und feine Linien entdeckt. Auch kraftvolle, markante Motive gehören zu ihrem Repertoire. Mit einem feinen Gespür für Ästhetik bringt sie natürliche Elemente detailreich unter die Haut. Gleichzeitig legt sie großen Wert darauf, die individuellen Wünsche ihrer Kund_innen umzusetzen- jedes Tattoo wird gemeinsam geplant und mit einer persönlichen Note versehen. Dabei entstehen authentische Designs, die Persönlichkeit jedes einzelnen widerspiegeln.",
            "contact_email": "laura-tattoo@gmx.de",
            "is_active": true,
            "name": "Laura",
            "profession": "Tattooing",
            "profile_image": "laura_profile.JPG",
            "social_media_links": "instagram, facebook, tiktok, X",
            "specialties": "Realistic, Neo-Traditional, Black-Work"
        }
 */


type Artist = {
    artist_id: number
    bio: string
    contact_email: string
    is_active: boolean
    name: string
    profession: "Tattooing" | "Piercing" | "Piercing und Hand-Poke"
    profile_image: string
    social_media_links: string
    specialties: string
}


export async function getArtistsByProfession(profession: string): Promise<Artist> {
    const response = await fetch(`http://127.0.0.1:5001/api/artists`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const artistByProfessions = data.filter((artist: { profession: string }) => artist.profession === profession);
    return artistByProfessions;

}

console.log(getArtistsByProfession('tattooist'))

