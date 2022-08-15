import axios from 'axios'
import { config } from '../config/env'

console.log('gateway url: ', config.url)
const api = axios.create({
  baseURL: config.url
})

export default api
