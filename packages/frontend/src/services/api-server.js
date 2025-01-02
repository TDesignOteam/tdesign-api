import axios from 'axios'

const cmpApiInstance = axios.create({
  baseURL: 'http://127.0.0.1:16009/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 1000
})

export { cmpApiInstance }

export default cmpApiInstance
