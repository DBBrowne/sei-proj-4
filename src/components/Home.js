import React from 'react'

import { debug } from '../config.js'
import eventsApi from '../lib/api/api.js'
import Error from './common/Error.js'
import Loading from './common/Loading.js'
import EventList from './events/EventList.js'

export default function Home (){
  const [eventsData, setEventsData] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  React.useEffect(() => {
    const initEventData = async ()=>{
      eventsApi.getAll().then(res=>{
        setEventsData(res.data)
      }).catch(err=>{
        debug && console.log(err)
        setIsError(true)
      })
    }
    initEventData()
  }, [])
  return (
    <>
      {isError && <Error />}
      {!eventsData.length ? 
        <Loading /> :
        <EventList events={eventsData}/>
      }
    </>
  )
}