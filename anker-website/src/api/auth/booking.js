import api from "../api"
import { getAuthHeaders } from "./getAuthHeaders"


async function getBookings(){
    try {
        const authHeaders = getAuthHeaders()
        const response = await api.get(`/admin/api/bookings`, {headers: authHeaders});
        return response.data;
    } catch (error) {
        console.error("Error in function getBookings():", error.response ? error.response.data : error.message);
    }
}

async function addBooking(eventData) {
    try {
        const authHeaders = getAuthHeaders()
        const response = await api.post(`/admin/api/bookings`, eventData, {headers: authHeaders});
        return response.data
    } catch (error) {
        console.error("Error in function addBooking():", error.response ? error.response.data : error.message);
    }
}

async function updateBooking(eventId, eventData) {
    try {
        const authHeaders = getAuthHeaders()
        const response = await api.put(`/admin/api/bookings/${eventId}`, eventData, {headers: authHeaders});
        return response.data
    } catch (error) {
        console.error("Error in function updateBooking():", error.response ? error.response.data : error.message);
    }
}

async function deleteBooking(eventId) {
    try {
        const authHeaders = getAuthHeaders()
        const response = await api.delete(`/admin/api/bookings/${eventId}`, {headers: authHeaders});
        return response.data
    } catch (error) {
        console.error("Error in function deleteBooking():", error.response ? error.response.data : error.message);
    }
}


export {
    getBookings,
    addBooking,
    updateBooking,
    deleteBooking
}

/**
 * Calendar Events
 * [
    {
        id: 1,
        title: "Ear Piercing",
        start: new Date(moment().add(1, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(1, 'days').set({ hour: 13, minute: 0 })),
    }, 
   ]
 */


/**
 * Booking Model 
 * booking_id - int PK auto-inc
 * title = str null=False
 * client_name - str null=False
 * telephone - str
 * client_id - int FK null=True    FOR FUTURE
 * artist_id - int FK null=True    FOR FUTURE
 * service_id - int FK null=True    FOR FUTURE
 * start_datetime - DateTime null=false
 * end_datetime - DateTime null=false
 * notes - sa.str
 * booking_status - enum Booking status - pending, confirmed, cancelled, completed
 * created_at - datetime.now() = 2025-06-14 10:32:47.981389
 */

