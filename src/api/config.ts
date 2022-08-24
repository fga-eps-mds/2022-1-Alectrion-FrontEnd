import axios from 'axios'
// import { config } from '../config/env'

const api = axios.create({
  baseURL: 'https://alectrion-user-api.herokuapp.com/'
})

export default api
