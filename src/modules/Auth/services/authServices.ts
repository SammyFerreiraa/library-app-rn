class AuthServices {
  private httpClient
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(httpClient: any) {
    this.httpClient = httpClient
  }

  async getInfos(email: string) {
    try {
      const response = await this.httpClient.post(
        'http://172.25.253.89:3000/infos',
        {
          email,
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await this.httpClient.post(
        'http://172.25.253.89:3000/login',
        {
          email,
          password,
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async register({
    name,
    email,
    password,
    city,
    address,
  }: {
    name: string
    email: string
    password: string
    city: string
    address: string
  }) {
    try {
      await this.httpClient.post('http://172.25.253.89:3000/register', {
        name,
        email,
        password,
        city,
        address,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default AuthServices
