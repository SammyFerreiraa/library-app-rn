import fetchClient from '@/services/fetchClient'
import BookServices from './bookServices'

const apiService = (token: string) => {
  return new BookServices(fetchClient, token)
}
export default apiService
