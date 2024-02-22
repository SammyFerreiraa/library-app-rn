import React from 'react'

import BookView from './Book.view'
import useBookModel from './Book.model'

const Book = () => {
  return <BookView {...useBookModel()} />
}

export default Book
