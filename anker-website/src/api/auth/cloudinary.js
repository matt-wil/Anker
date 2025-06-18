import api from "../../api/api"
import { getAuthHeaders } from "./getAuthHeaders"

/**
 * PortfolioImage model 
 * image_id - int PK auto-inc
 * artist_id - int FK null=False
 * image_url - str null=False
 * description - str
 * category - Tattoo | Piercing
 * upload_date - datetime.now()
 */


const uploadCloudinaryImageUrlToDatabase = async ({ imgUrl, artistName, description, category }) => {
    try {
        const headers = getAuthHeaders()
        const response = await api.post(`/admin/api/portfolio_images`, {
            artist_name: artistName,
            image_url: imgUrl,
            description: description,
            category: category
        }, {headers: headers})
        return response.data;
    } catch (err) {
        console.error("There was an error in th uploadCloudinaryImageUrlToDatabase function:", err.message, err)
    }
}

export {
    uploadCloudinaryImageUrlToDatabase
}