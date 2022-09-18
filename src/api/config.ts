import axios from 'axios'
import { config } from '../config/env'

const api = axios.create({
  baseURL: config.url
})

// const api = axios.create({
//   baseURL: 'http://localhost:4002/'
// })

export default api
