import fetchClient from '@/services/fetchClient'
import AuthServices from './authServices'

const apiService = () => {
  return new AuthServices(fetchClient)
}
export default apiService
