import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventPopUp from './EventPopUp'



const localizer = momentLocalizer(moment)

const initialEvents = [
    {
        id: 1,
        title: "Ear Piercing",
        start: new Date(moment().add(1, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().add(1, 'days').set({ hour: 13, minute: 0 })),
    }, 
    {
        id: 2,
        title: "Labret Piercing",
        start: new Date(moment().subtract(10, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().subtract(10, 'days').set({ hour: 13, minute: 0 })),
    },    
    {
        id: 3,
        title: "Nipple Piercing",
        start: new Date(moment().subtract(25, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().subtract(25, 'days').set({ hour: 13, minute: 0 })),
    },    
    {
        id: 4,
        title: "Belly Piercing",
        start: new Date(moment().subtract(15, 'days').set({ hour:12, minute: 0 })),
        end: new Date(moment().subtract(15, 'days').set({ hour: 13, minute: 0 })),
    },    
]

// next step make it persistant! 

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