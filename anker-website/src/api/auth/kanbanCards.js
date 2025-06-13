import api from "../../api/api"
import { getAuthHeaders } from "./getAuthHeaders"

async function getKanbanCards( cardId ){
    try {
        const headers = getAuthHeaders()
        let response;
        if (cardId) {
            response = await api.get(`/admin/api/cards/${cardId}`, {headers})
        } else {
            response = await api.get(`/admin/api/cards`, {headers})
        }
        return response.data;
    } catch (err) {
        console.error(err.message)
        throw new Error(err.message)
    }
}

async function updateKanbanCard(cardId, updates) {
    try {
        const headers = getAuthHeaders()
        const response = await api.put(`/admin/api/cards/${cardId}`, updates, {headers})
        return response.data;
    } catch (err) {
        console.error(err.message)
        throw new Error(err.message)
    }
}

async function deleteKanbanCard(idToDelete) {
    try {
        const headers = getAuthHeaders();

        const response = await api.delete(`/admin/api/cards/${idToDelete}`, { headers });
        console.log(`Card ${idToDelete} deleted successfully.`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting Kanban card ${idToDelete || 'ID was undefined'}:`, error.message || error); 
        throw error;
    }
}

async function addKanbanCard(cardData) {
    try {
        const headers = getAuthHeaders()
        const response = await api.post(`/admin/api/cards`, cardData, {headers})
        return response.data;
    } catch (err) {
        console.error(err.message)
        throw new Error(err.message)
    }
}

export {
    getKanbanCards,
    updateKanbanCard,
    deleteKanbanCard,
    addKanbanCard
}