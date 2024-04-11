import { setApiHeaders } from '@/utils/apiUtils'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(config => setApiHeaders(config))

export default api
