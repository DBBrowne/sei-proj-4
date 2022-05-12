export function isSameDayEvent(event){
  const start = event.start
  const end = event.finish
  const  isSameDay = (
    start.getDate() === end.getDate() &&
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  )
  return isSameDay
}

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
}
const dateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}
export function toDateTime(date, includeDate = true) {
  let out = ''
  if (includeDate){
    out += `${date.toLocaleDateString([], dateOptions)}, `
  }
  out += date.toLocaleTimeString([], timeOptions)
  return out
}


export default function EventCardSmall(event){
// {
//   description:,
//   finish: ,
//   id: ,
//   image: ,
//   locationLat: ,
//   locationLong: ,
//   locationName: ,
//   start: ,
//   title: ,
// }
  const startTime = toDateTime(event.start)
  const finishTime = toDateTime(event.finish, isSameDayEvent(event))

  return (
    <div className="event-card-small">
      <figure className="event-card-small_figure">
        <img src={event.image} alt={event.title}/>
      </figure>
      <div className="event-card-small_info">
        <h3>{event.title}</h3>
        <small className="event-times">From: {startTime} to {finishTime}</small>
        <small>Location: {event.locationName}</small>
        <p>{event.description}</p>
      </div>
    </div>
  )
}