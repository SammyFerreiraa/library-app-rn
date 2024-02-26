import React from 'react'
import ListBooksView from './ListBooks.view'
import useListBooksModel from './ListBooks.model'

const ListBooks = () => {
  return <ListBooksView {...useListBooksModel()} />
}

export default ListBooks
