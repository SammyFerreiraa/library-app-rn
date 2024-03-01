import HomeService from './homeService'

// Mocking the httpClient
const mockHttpClient = {
  get: jest.fn(),
  getParams: jest.fn(),
}

describe('HomeService', () => {
  let homeService: HomeService
  beforeEach(() => {
    homeService = new HomeService(mockHttpClient, 'mockAccessToken')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getBooks', () => {
    it('', async () => {
      mockHttpClient.get.mockResolvedValueOnce({ data: ['book1', 'book2'] })

      const books = await homeService.getBooks()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/books',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toEqual(['book1', 'book2'])
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to fetch books'
      mockHttpClient.get.mockRejectedValueOnce(new Error(errorMessage))

      const books = await homeService.getBooks()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/books',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('getCompletedRental', () => {
    it('should call httpClient.get with the correct URL and headers', async () => {
      mockHttpClient.getParams.mockResolvedValueOnce({
        data: ['rental1', 'rental2'],
      })

      const rentals = await homeService.getCompletedRentals('params')

      expect(mockHttpClient.getParams).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals/',
        'params',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(rentals).toEqual(['rental1', 'rental2'])
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to fetch rentals'
      mockHttpClient.getParams.mockRejectedValueOnce(new Error(errorMessage))

      const rentals = await homeService.getCompletedRentals('params')

      expect(mockHttpClient.getParams).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals/',
        'params',
        {
          headers: { Authorization: 'Bearer mockAccessToken' },
        },
      )
      expect(rentals).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('getRented', () => {
    it('should call httpClient.get with the correct URL and headers', async () => {
      mockHttpClient.get.mockResolvedValueOnce({
        data: {
          books: ['book1', 'book2'],
        },
      })

      const books = await homeService.getRented()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/users',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toEqual(['book1', 'book2'])
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to fetch books'
      mockHttpClient.get.mockRejectedValueOnce(new Error(errorMessage))

      const books = await homeService.getRented()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/users',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('getFavorites', () => {
    it('should call httpClient.get with the correct URL and headers', async () => {
      mockHttpClient.get.mockResolvedValueOnce({
        data: {
          favorites: ['book1', 'book2'],
        },
      })

      const books = await homeService.getFavorites()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/users',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toEqual(['book1', 'book2'])
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to fetch books'
      mockHttpClient.get.mockRejectedValueOnce(new Error(errorMessage))

      const books = await homeService.getFavorites()

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/users',
        { headers: { Authorization: 'Bearer mockAccessToken' } },
      )
      expect(books).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })
})
