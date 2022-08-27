import axios from 'axios'
import { config } from '../config/env'

const api = axios({
  baseURL: config.url
})

export default api
