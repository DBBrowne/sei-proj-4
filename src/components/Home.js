import axios from 'axios'
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
      eventsApi.getAll().then(async res=>{
        // DEV: random images
        const imageurlpromises = res.data.map(()=>{
          const randomImageUrl = 'https://random.imagecdn.app/v1/image?width=250&height=200&format=redirect'
          return axios.get(
            randomImageUrl
          ).then(res=>{
            return res.request.responseURL
          })
        })
        // @ts-ignore
        await Promise._forEach(imageurlpromises, async (el, i)=>{
          res.data[i].image = await el
        })
        // DEV END
        setEventsData(res.data)
      }).catch(err=>{
        debug && console.log(err)
        setIsError(true)
      })
    }
    initEventData()
  }, [])

  return (
    <section>
      {isError && <Error />}
      {!isError && !eventsData.length ? 
        <Loading /> :
        <EventList events={eventsData}/>
      }
    </section>
  )
}