import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export default function Calendar() {
  return (
    <div>
      <h1>Anker Piercing Kalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}