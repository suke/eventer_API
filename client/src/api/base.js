import axios from 'axios'

const Api = axios.create({
  xsrfHeaderName: 'X-CSRF-Token',
  withCredentials: true,
  baseURL: 'http://localhost:3000/api/v1'
})

export default Api
