import { SectionBooks } from '@/components'
import React from 'react'

import useBookModel from './Book.model'
import ScreenView from '@/components/ScreenView'

import InfosTime from './InfosTime'
import Chapter from './Chapters'
import Description from './Description'
import Infos from './Infos'
import AuthorProfile from './Profile'
import StatusRental from './StatusRental'

const BookView = ({
  scrollViewRef,
  book,
  books,
}: ReturnType<typeof useBookModel>) => {
  return (
    <ScreenView scrollViewRef={scrollViewRef}>
      <StatusRental />
      <Infos />
      <InfosTime />
      <Description />
      <Chapter />
      <AuthorProfile />
      <StatusRental />
      <SectionBooks
        books={books.filter(
          (books) =>
            books.category === book?.category && books.isbn !== book?.isbn,
        )}
        title="Livros similares"
      />
    </ScreenView>
  )
}

export default BookView
