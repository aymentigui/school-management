import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css"

moment.locale('fr')
const localizer = momentLocalizer(moment)
// Traduction des boutons et labels
const messages = {
  allDay: 'Toute la journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: 'Aujourd\'hui',
  month: 'Mois',
  week: 'Semaine',
  work_week: 'Semaine de travail',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  noEventsInRange: 'Aucun événement dans cette période',
  showMore: "+ Voir plus "
}


const BigCalendar = () => {

  const [view, setView] = useState<View>(Views.WORK_WEEK)
  const [date, setDate] = useState(new Date())

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }

  const handleNavigate = (newDate: Date) => {
    setDate(newDate)
  }

  return <div className='h-full'>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      date={date}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      onNavigate={handleNavigate}
      min={new Date(2099, 1, 1, 8, 0, 0)}
      max={new Date(2099, 1, 1, 18, 0, 0)}
      messages={{day:messages.day,work_week:messages.work_week,next:messages.next,today:messages.today,previous:messages.previous}}
    />
  </div>
}

export default BigCalendar