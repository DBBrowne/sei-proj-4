import axios from 'axios'
import { baseUrl } from '../../config'

const eventsBaseUrl = `${baseUrl}/heard`

function eventsGetList(){
  return axios.get(`${eventsBaseUrl}/events`)
}

export default {
  getAll: eventsGetList,
}