import api from "../../api/api"


const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "credentials": "include"
        }
    }
}

async function getKanbanCards( cardId ){
    try {
        const headers = getAuthHeaders()
        let response;
        if (cardId) {
            response = await api.get(`/admin/api/cards/${cardId}`, headers)
        } else {
            response = await api.get(`/admin/api/cards`, headers)
        }
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

async function updateKanbanCard(cardId, updates) {
    try {
        const headers = getAuthHeaders()
        const response = await api.put(`/admin/api/cards/${cardId}`, updates, headers)
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

async function deleteKanbanCard({cardId}) {
    try {
        const headers = getAuthHeaders()
        const response = await api.delete(`/admin/api/cards/${cardId}`, headers)
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

async function addKanbanCard(cardData) {
    try {
        const headers = getAuthHeaders()
        const response = await api.post(`/admin/api/cards`, cardData, headers)
        return response.data;
    } catch (err) {
        console.error(err.messsage)
        throw new Error(err.messsage)
    }
}

export {
    getKanbanCards,
    updateKanbanCard,
    deleteKanbanCard,
    addKanbanCard
}