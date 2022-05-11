export default function EventList({ events }){
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
  return (
    events.map(event=>{
      return (
        event.id
      )
    })
  )

}