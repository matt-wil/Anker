import { useState, useEffect, useRef } from "react"
import moment from "moment"
import { deleteBooking } from "../../../api/auth/booking";


const EventPopUp = ({ isOpen, onClose, onSave, date, event, onDelete }) => {
    const [eventData, setEventData] = useState({
        id: "",
        title: "",
        clientName: "",
        telephone: "",
        clientId: null,
        artistId: 3,
        serviceId: null,
        start: "",
        end: "",
        notes: "",
        created_at: new Date()
    });
    const formRef = useRef();

    useEffect(() => {
        if (event) {
            setEventData({
                id: event.id || null,
                title: event.title || "",
                clientName: event.clientName || "", 
                telephone: event.telephone || "",
                client_id: event.client_id || null,
                artist_id: event.artist_id || 3, 
                service_id: event.service_id || null,
                start: moment(event.start).format("YYYY-MM-DDTHH:mm"),
                end: moment(event.end).format("YYYY-MM-DDTHH:mm"),
                notes: event.notes || "",
            });
        } else if (date) {
            const defaultStart = moment(date);
            const defaultEnd = moment(date).add(15, "minutes"); // Default 15 min duration for new events
            setEventData({
                id: null, // Clearly null for new events
                title: "",
                clientName: "",
                telephone: "",
                client_id: null,
                artist_id: 3,
                service_id: null,
                start: defaultStart.format("YYYY-MM-DDTHH:mm"),
                end: defaultEnd.format("YYYY-MM-DDTHH:mm"),
                notes: "",
            });
        } else {
            setEventData({
                id: null,
                title: "",
                clientName: "",
                telephone: "",
                client_id: null,
                artist_id: 3,
                service_id: null,
                start: "",
                end: "",
                notes: "",
            });
        }
    }, [isOpen, event, date]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "start") {
          if (value) {
            const newStart = moment(value);
            const newEnd = newStart.clone().add(15, "minutes");
            setEventData(prev => ({
              ...prev,
              start: newStart.format("YYYY-MM-DDTHH:mm"),
              end: newEnd.format("YYYY-MM-DDTHH:mm"),
            }));
          } else {
            setEventData(prev => ({ ...prev, start: "", end: "" }));
          }
        } else {
          setEventData(prev => ({ ...prev, [name]: value }));
        }
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStart = moment(eventData.start).toDate();
        let newEnd

        if (!eventData.end || !moment(eventData.end).isValid()) {
            newEnd = moment(newStart).add(15, "minutes").toDate();
        } else {
            newEnd = moment(eventData.end).toDate();
        }
        const eventDataToSubmit = {
            ...eventData,
            start: newStart, 
            end: newEnd,
            ...(event && { id: event.id })
        }
        if (eventDataToSubmit.id === null) {
            delete eventDataToSubmit.id
        }

        onSave(eventDataToSubmit);
        onClose();
    };

    const handleDeleteButton = async () => {
        if (!eventData.id) {
            console.warn("No event ID found. Cannot delete event.")
            return
        }
        if (window.confirm("Wirklich löschen?")) {
            try {
                await deleteBooking(eventData.id)
                onDelete(eventData.id)
                onClose()
        } catch (error) {
            console.error(error)
            alert("Fehler beim Löschen des Termins")
        }
    }}

    if (!isOpen) {
        return null;
    }

  return (
    <div className="fixed top-0 left-0 buttom-0 w-[100dvw] h-[100dvh] bg-gray-500/40 flex justify-center items-center z-10 rounded">
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-[90%] md:w-[70%] lg:w-[50%] max-w-xl text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">{event ? "Termin Ändern" : "Neuer Termin"}</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Titel: </label>
                    <input 
                        type="text" 
                        name="title"
                        value={eventData.title} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Name: </label>
                    <input 
                        type="text" 
                        name="clientName"
                        value={eventData.clientName} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Telefon: </label>
                    <input 
                        type="text" 
                        name="telephone"
                        value={eventData.telephone} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Notizen: </label>
                    <input 
                        type="text" 
                        name="notes"
                        value={eventData.notes} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Anfang: </label>
                    <input 
                        type="datetime-local"
                        name="start"
                        value={eventData.start} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-24 shrink-0 text-right pr-4">Ende: </label>
                    <input 
                        type="datetime-local"
                        name="end"
                        value={eventData.end} 
                        onChange={handleFormChange} 
                        required
                        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="bg-green-600 mr-5 mt-5 p-2 rounded cursor-pointer">Speichern</button>
                <button className="cursor-pointer bg-gray-600 p-2 rounded" type="button" onClick={onClose}>Zurück</button>
                <button type="button" onClick={handleDeleteButton} className="bg-red-600 ml-5 mt-5 p-2 rounded cursor-pointer">Termin Löschen</button>
            </form>
        </div>
    </div>
  )
}

export default EventPopUp