import api from "../../api/api"
import { getAuthHeaders } from "./getAuthHeaders"

const getArtists = async () => {
    try {
        const headers = getAuthHeaders()
        const response = await api.get(`/admin/api/artists`, {headers})
        return response.data.artists;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

const createArtist = async (artistData) => {
    try {
        const headers = getAuthHeaders()
        const response = await api.post(`/admin/api/artists`, artistData, {headers})
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

const updateArtist = async (artistId, updates) => {
    try {
        const headers = getAuthHeaders()
        const response = await api.put(`/admin/api/artists/${artistId}`, updates, {headers})
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

const deleteArtist = async (artistId) => {
    try {
        const headers = getAuthHeaders()
        const response = await api.delete(`/admin/api/artists/${artistId}`, {headers})
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

export { getArtists, createArtist, updateArtist, deleteArtist }