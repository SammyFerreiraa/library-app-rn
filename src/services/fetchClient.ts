import axios from 'axios'

const fetchClient = {
  async get(url: string, accessToken: object) {
    return (await axios.get(url, accessToken)).data
  },

  async getParams(url: string, params: string, accessToken: object) {
    return (await axios.get(url + params, accessToken)).data
  },

  async post(url: string, data: object, accessToken?: object) {
    return (await axios.post(url, data, accessToken)).data
  },

  async delete(url: string, header: object) {
    return (await axios.delete(url, header)).data
  },
}

export default fetchClient