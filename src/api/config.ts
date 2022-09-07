import axios from 'axios'

const api = axios.create({
  baseURL: 'https://alectrion-user-api.herokuapp.com/'
})

export default api
