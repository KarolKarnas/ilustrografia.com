import axios from 'axios'

// "proxy": "http://localhost:5000",
const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : '/',
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient