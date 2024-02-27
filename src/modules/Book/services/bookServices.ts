class BookServices {
  private httpClient
  private accessToken
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(httpClient: any, accessToken: string) {
    this.httpClient = httpClient
    this.accessToken = {
      Authorization: 'Bearer ' + accessToken,
    }
  }

  async addFavorite(bookId: string) {
    try {
      await this.httpClient.post(
        'http://172.25.253.89:3000/favorites',
        { bookId },
        {
          headers: this.accessToken,
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  async removeFavorite(bookId: string) {
    try {
      await this.httpClient.delete('http://172.25.253.89:3000/favorites', {
        headers: this.accessToken,
        data: { bookId },
      })
    } catch (error) {
      console.log(error)
    }
  }

  async rentalBook(bookId: string) {
    try {
      const response = await this.httpClient.post(
        'http://172.25.253.89:3000/rentals',
        { bookId },
        {
          headers: this.accessToken,
        },
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async returnBook(rentedBookId: string) {
    try {
      await this.httpClient.delete(
        'http://172.25.253.89:3000/rentals/' + rentedBookId,
        {
          headers: this.accessToken,
        },
      )
    } catch (error) {
      console.log(error)
    }
  }
}

export default BookServices
