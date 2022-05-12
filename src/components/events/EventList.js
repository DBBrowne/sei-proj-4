import EventCardSmall from './EventCardSmall.js'

export default function EventList({ events }){
  return (
    events.map(event=>{
      return (
        <EventCardSmall {...event} key={event.id}/>
      )
    })
  )
}