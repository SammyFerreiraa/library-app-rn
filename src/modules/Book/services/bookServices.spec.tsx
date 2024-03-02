import BookServices from './bookServices'

const mockHttpClient = {
  post: jest.fn(),
  delete: jest.fn(),
}

describe('BookServices', () => {
  let bookServices: BookServices
  beforeEach(() => {
    bookServices = new BookServices(mockHttpClient, 'mockAccessToken')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('addFavorite', () => {
    it('should call httpClient.post with the correct URL and headers', async () => {
      const bookId = 'book1'
      await bookServices.addFavorite(bookId)

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/favorites',
        { bookId },
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to add favorite'
      mockHttpClient.post.mockRejectedValueOnce(new Error(errorMessage))

      const bookId = 'book1'
      await bookServices.addFavorite(bookId)

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/favorites',
        { bookId },
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('removeFavorite', () => {
    it('should call httpClient.delete with the correct URL and headers', async () => {
      const bookId = 'book1'
      await bookServices.removeFavorite(bookId)

      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/favorites',
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
          data: { bookId },
        },
      )
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to remove favorite'
      mockHttpClient.delete.mockRejectedValueOnce(new Error(errorMessage))

      const bookId = 'book1'
      await bookServices.removeFavorite(bookId)

      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/favorites',
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
          data: { bookId },
        },
      )
    })
  })

  describe('rentalBook', () => {
    it('should call httpClient.post with the correct URL and headers', async () => {
      const rentalData = {
        data: {
          title: 'title',
          author: 'author',
          description: 'description',
          rental: {
            id: 'rentalId',
          },
        },
      }
      mockHttpClient.post.mockResolvedValueOnce({ data: { ...rentalData } })

      const rental = await bookServices.rentalBook('book1')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals',
        {
          bookId: 'book1',
        },
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
      expect(rental).toEqual({ ...rentalData })
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to rental book'
      mockHttpClient.post.mockRejectedValueOnce(new Error(errorMessage))

      const rental = await bookServices.rentalBook('book1')

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals',
        {
          bookId: 'book1',
        },
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
      expect(rental).toBeUndefined()
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })

  describe('returnBook', () => {
    it('should call httpClient.delete with the correct URL and headers', async () => {
      const bookId = 'book1'
      await bookServices.returnBook(bookId)

      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals/' + `${bookId}`,
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
    })

    it('should handle errors gracefully', async () => {
      jest.spyOn(console, 'log').mockImplementation(() => {})

      const errorMessage = 'Failed to return book'
      mockHttpClient.delete.mockRejectedValueOnce(new Error(errorMessage))

      const bookId = 'book1'
      await bookServices.returnBook(bookId)

      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        'http://172.25.253.89:3000/rentals/' + `${bookId}`,
        {
          headers: {
            Authorization: 'Bearer mockAccessToken',
          },
        },
      )
      expect(console.log).toHaveBeenCalledWith(new Error(errorMessage))
    })
  })
})
