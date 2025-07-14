import axios from 'axios'
import { get } from 'lodash'


const cmpApiInstance = axios.create({
  
  baseURL: getBaseURL(),
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 1000
})

function getBaseURL(){
  if (import.meta.env.MODE !== 'development') {
    return '/'
  }
  else{
    if (window.location.host.includes('cnb.run')){
      return window.location.origin.replace('10000.cnb.run', '16001.cnb.run')
    }
    return 'http://127.0.0.1:16001/'
  }
  
}

export { cmpApiInstance }

export default cmpApiInstance
