import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
import { Alert } from 'react-native'

const fetchClient = {
  async get(url: string, accessToken: object) {
    try {
      return await axios.get(url, accessToken)
    } catch (error) {
      console.log(error)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any).response.status === 401) {
        useAuth.getState().signOut()
        Alert.alert(
          'Sessão expirada',
          'Sua sessão expirou, faca login novamente.',
        )
      }
    }
  },

  async getParams(url: string, params: string, accessToken: object) {
    return await axios.get(url + params, accessToken)
  },

  async post(url: string, data: object, accessToken?: object) {
    return await axios.post(url, data, accessToken)
  },

  async delete(url: string, header: object) {
    return await axios.delete(url, header)
  },
}

export default fetchClient
