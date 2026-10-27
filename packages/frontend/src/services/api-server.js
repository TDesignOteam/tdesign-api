import axios from 'axios'
import { API_ORIGIN } from '../../../scripts/api-origin.js'

const cmpApiInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 1000
})

function getBaseURL() {
  if (import.meta.env.MODE === 'development') {
    if (window.location.host.includes('cnb.run')) {
      return window.location.origin.replace('10000.cnb.run', '16001.cnb.run')
    }
    return `${API_ORIGIN}/`
  }
  return '/'
}

export { cmpApiInstance }

export default cmpApiInstance
