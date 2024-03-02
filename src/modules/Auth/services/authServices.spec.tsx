import AuthServices from './authServices'

const mockHttpClient = {
  post: jest.fn(),
}

describe('AuthServices', () => {
  let authServices: AuthServices
  beforeEach(() => {
    authServices = new AuthServices(mockHttpClient)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getInfos', () => {
    it('should call httpClient.post with the correct URL and headers', async () => {
      mockHttpClient.post.mockResolvedValueOnce({ data: 'email' })

      const infos = await authServices.getInfos('email')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/infos',
        { email: 'email' },
      )
      expect(infos).toEqual('email')
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to fetch infos'
      mockHttpClient.post.mockRejectedValueOnce(new Error(errorMessage))

      const infos = await authServices.getInfos('email')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/infos',
        { email: 'email' },
      )
      expect(infos).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('login', () => {
    it('should call httpClient.post with the correct URL and headers', async () => {
      mockHttpClient.post.mockResolvedValueOnce({
        data: {
          email: 'email',
          password: 'password',
        },
      })

      const infos = await authServices.login('email', 'password')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/login',
        {
          email: 'email',
          password: 'password',
        },
      )

      expect(infos).toEqual({
        email: 'email',
        password: 'password',
      })
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to login'
      mockHttpClient.post.mockRejectedValueOnce(new Error(errorMessage))

      const infos = await authServices.login('email', 'password')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/login',
        {
          email: 'email',
          password: 'password',
        },
      )

      expect(infos).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })
})
