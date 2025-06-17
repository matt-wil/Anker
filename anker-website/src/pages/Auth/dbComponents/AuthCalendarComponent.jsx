import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useState, useEffect } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventPopUp from './EventPopUp'
import { getBookings, addBooking, updateBooking } from '../../../api/auth/booking'


const localizer = momentLocalizer(moment)

const transformBookingToAPI = (booking) => {
  return {
    booking_id: booking.id,
    title: booking.title,
    client_name: booking.clientName,
    telephone: booking.telephone,
    client_id: booking.clientId,
    artist_id: booking.artistId,
    service_id: booking.serviceId,
    start_datetime: booking.start instanceof Date ? booking.start.toISOString() : booking.start,
    end_datetime: booking.end instanceof Date ? booking.end.toISOString() : booking.end,
    notes: booking.notes,
    created_at: booking.created_at instanceof Date ? booking.created_at.toISOString() : booking.created_at,
  };
};

const transformBookingFromAPI = (booking) => {
  return {
    id: booking.booking_id,
    title: booking.title,
    clientName: booking.client_name,
    telephone: booking.telephone,
    clientId: booking.client_id,
    artistId: booking.artist_id,
    serviceId: booking.service_id,
    start: new Date(booking.start_datetime),
    end: new Date(booking.end_datetime),
    notes: booking.notes,
    created_at: new Date(booking.created_at),
  };
};

const AuthCalendarComponent = () => {
    const [events, setEvents] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpenEvent, setIsOpenEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        getBookings().then((res) => {
            setEvents(res.map(transformBookingFromAPI))
            console.log(res)
        })
    }, []);

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
            const updatedEvent = transformBookingToAPI(eventData)
            updateBooking(eventData.id, updatedEvent)
            .then(() => {
                setEvents((prev) => prev.map((e) => (e.id === eventData.id ? eventData : e)))
            }).catch((err) => console.error(err))
            
        } else {
            const newTempEvent = {
                ...eventData,
                id: crypto.randomUUID(),
            }
            setEvents((prev) =>[...prev, newTempEvent])
            const newEventData = transformBookingToAPI(eventData)
            console.log(newEventData, "eventData")
            addBooking(newEventData)
            .then((res) => {
                if (res.ok) {
                    console.log(res)
                    getBookings()
                    .then((res) => {
                        setEvents(res.map(transformBookingFromAPI))
                    })
                }
            })
        }
        setIsOpenEvent(false);
        setSelectedEvent(null);
        setSelectedDate(null);
    };

    const handleDeleteEvent = (deletedEvent) => {
        setEvents((prev) => prev.filter((e) => e.id !== deletedEvent.id));
        setIsOpenEvent(false);
        setSelectedEvent(null);
        setSelectedDate(null);
    }


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
                onDelete={handleDeleteEvent}
                date={selectedDate}
                event={selectedEvent}
            />
        )}
    </>

  )
}

export default AuthCalendarComponent