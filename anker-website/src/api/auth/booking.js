import api from "../api"
import { getAuthHeaders } from "./getAuthHeaders"


const authHeaders = getAuthHeaders()


async function getBookings(){
    try {
        const response = await fetch(`${import.meta.env.VITE_ANKER_API}/admin/api/bookings`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.messsage)
    }
}

async function addBooking(eventData) {
    try {
        const response = await api.post(`/admin/api/bookings`, eventData, {authHeaders});
        return response
    } catch (error) {
        console.error(error)
    }
}

async function updateBooking(eventId, eventData) {
    try {
        const response = await api.put(`/admin/api/bookings/${eventId}`, eventData, {authHeaders});
        return response
    } catch (error) {
        console.error(error)
    }
}

async function deleteBooking(eventId) {
    try {
        const response = await api.delete(`/admin/api/bookings/${eventId}`, null, {authHeaders});
        return response
    } catch (error) {
        console.error(error)
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

