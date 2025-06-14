import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventPopUp from './EventPopUp'



const localizer = momentLocalizer(moment)

// fake events 
const initialEvents = [
    {
        id: 1,
        title: "Ear Piercing",
        clientName: "Alina Schmidt",
        telephone: "01625833726",
        clientId: null,
        artistId: 3,
        serviceId: null,
        start: new Date(moment().add(1, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(1, 'days').set({ hour: 13, minute: 0 })),
        notes: "Underage must bring ID and guardian",
        booking_status: "pending",
        created_at: new Date()
    }, 
    {
        id: 2,
        title: "Eyebrown Piercing",
        clientName: "Sandro Mclaud",
        telephone: "01625833726",
        clientId: null,
        artistId: 3,
        serviceId: null,
        start: new Date(moment().add(2, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(2, 'days').set({ hour: 13, minute: 0 })),
        notes: "friends price",
        booking_status: "pending",
        created_at: new Date()
    },
    {
        id: 3,
        title: "Nipple Piercing",
        clientName: "Daniel Sturm",
        telephone: "01625833726",
        clientId: null,
        artistId: 3,
        serviceId: null,
        start: new Date(moment().add(3, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(3, 'days').set({ hour: 13, minute: 0 })),
        notes: "may be 5 min late",
        booking_status: "pending",
        created_at: new Date()
    },
    {
        id: 4,
        title: "Labret Piercing",
        clientName: "Jackson Smith",
        telephone: "01625833726",
        clientId: null,
        artistId: 3,
        serviceId: null,
        start: new Date(moment().add(4, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(4, 'days').set({ hour: 13, minute: 0 })),
        notes: "",
        booking_status: "pending",
        created_at: new Date()
    },
]

// next step make it persistant! 

// initialEvents will be getBookings()

const AuthCalendarComponent = () => {
    const [events, setEvents] = useState(initialEvents);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpenEvent, setIsOpenEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setSelectedEvent(null);
        setIsOpenEvent(true);
    };

    const handleSelectEvent = (event) => {
        setSelectedDate(null);
        setSelectedEvent(event);
        setIsOpenEvent(true);
    };

    const handleSaveEvent = (eventData) => {
        if (eventData.id) {
            setEvents((prev) => prev.map((e) => (e.id === eventData.id ? eventData : e)))
        } else {
            const newEvent = {
                ...eventData,
                id: crypto.randomUUID(),
            }
            setEvents((prev) =>[...prev, newEvent])
        }
        setIsOpenEvent(false);
        setSelectedEvent(null);
        setSelectedDate(null);
    };


  return (
    <>
        <div className='m-10'>
            <Calendar
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '77vh', width: '77vw' }}
            />
        </div>
        {isOpenEvent && (
            <EventPopUp 
                isOpen={isOpenEvent}
                onClose={() => setIsOpenEvent(false)}
                onSave={handleSaveEvent}
                date={selectedDate}
                event={selectedEvent}
            />
        )}
    </>

  )
}

export default AuthCalendarComponent