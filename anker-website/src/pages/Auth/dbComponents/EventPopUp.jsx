import { useState, useEffect } from "react"
import moment from "moment"


const EventPopUp = ({ isOpen, onClose, onSave, date, event }) => {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");


    useEffect(() => {
        if (event) {
            setTitle(event.title || "");
            setStart(moment(event.start).format("YYYY-MM-DDTHH:mm"));
            setEnd(moment(event.end).format("YYYY-MM-DDTHH:mm"));
        } else if (date) {
            const defaultEnd = moment(date).add(15, "minutes");
            setStart(moment(date).format("YYYY-MM-DDTHH:mm"));
            setEnd(moment(defaultEnd).format("YYYY-MM-DDTHH:mm"));
            setTitle("");
        }
    }, [isOpen, event, date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStart = moment(start).toDate();
        let newEnd

        if (!end || !moment(end).isValid()) {
            newEnd = moment(newStart).add(15, "minutes").toDate();
        } else {
            newEnd = moment(end).toDate();
        }
        const eventData = {
            title, 
            start: newStart, 
            end: newEnd,
            ...(event && { id: event.id })
        }
        onSave(eventData);
        onClose();
    };

    if (!isOpen) {
        return null;
    }

  return (
    <div className="fixed top-0 w-[100dvw] h-[100dvh] bg-gray-500/40 flex justify-center items-center z-10 rounded">
        <div className="bg-gray-900 p-20 rounded w-[50dvw]">
            <h2 className="text-2xl font-bold mb-4">{event ? "Termin Ändern" : "Neuer Termin"}</h2>
            <form  onSubmit={handleSubmit} >
                <div>
                    <label>Titel: </label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required
                        className=" w-[90%] p-2 rounded m-10 bg-gray-500"
                    />
                </div>
                <div>
                    <label>Anfang: </label>
                    <input 
                        type="datetime-local" 
                        value={start} 
                        onChange={(e) => setStart(e.target.value)} 
                        required
                        className=" w-[90%] p-2 rounded m-10 bg-gray-500"
                    />
                </div>
                <div>
                    <label>Ende: </label>
                    <input 
                        type="datetime-local" 
                        value={end} 
                        onChange={(e) => setEnd(e.target.value)} 
                        required
                        className=" w-[90%] p-2 rounded m-10 bg-gray-500"
                    />
                </div>
                <button type="submit" className="bg-green-600 mr-5 mt-5 p-2 rounded cursor-pointer">Speichern</button>
                <button className="cursor-pointer bg-gray-600 p-2 rounded" type="button" onClick={onClose}>Zurück</button>
            </form>
        </div>
    </div>
  )
}

export default EventPopUp