class HomeService {
  private httpClient
  private accessToken
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(httpClient: any, accessToken: string) {
    this.httpClient = httpClient
    this.accessToken = {
      Authorization: 'Bearer ' + accessToken,
    }
  }

  async getBooks() {
    try {
      const response = await this.httpClient.get(
        'http://172.25.253.89:3000/books',
        {
          headers: this.accessToken,
        },
      )
      if (response.data) return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getCompletedRentals(params: string) {
    try {
      const response = await this.httpClient.getParams(
        'http://172.25.253.89:3000/rentals/',
        `${params}`,
        {
          headers: this.accessToken,
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getRented() {
    try {
      const response = await this.httpClient.get(
        'http://172.25.253.89:3000/users',
        {
          headers: this.accessToken,
        },
      )
      return response.data.books
    } catch (error) {
      console.log(error)
    }
  }

  async getFavorites() {
    try {
      const response = await this.httpClient.get(
        'http://172.25.253.89:3000/users',
        {
          headers: this.accessToken,
        },
      )
      return response.data.favorites
    } catch (error) {
      console.log(error)
    }
  }
}

export default HomeService
