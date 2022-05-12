import axios from 'axios'
import { baseUrl } from '../../config'

const eventsBaseUrl = `${baseUrl}/heard`

async function eventsGetList(){
  return await axios.get(`${eventsBaseUrl}/events`).then(res=>{
    res.data.forEach(el=>{
      el.start = new Date(el.start)
      el.finish = new Date(el.finish)
    })
    return res
  })
}

export default {
  getAll: eventsGetList,
}