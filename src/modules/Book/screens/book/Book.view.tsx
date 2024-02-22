import { SectionBooks } from '@/components'
import React from 'react'
import InfosTime from './InfosTime'

import StatusRentalView from './StatusRental/StatusRental.view'
import InfosView from './Infos/Infos.view'
import StatusFavoriteView from './StatusFavorite/StatusFavorite.view'
import DescriptionView from './Description/Description.view'
import ChaptersView from './Chapters/Chapters.view'
import AuthorProfileView from './Profile/AuthorProfile.view'

import useBookModel from './Book.model'
import useStatusRentalModel from './StatusRental/StatusRental.model'
import useStatusFavoriteModel from './StatusFavorite/StatusFavorite.model'
import useInfosModel from './Infos/infos.model'
import useDescriptionModel from './Description/Description.model'
import useChapterModel from './Chapters/Chapters.model'
import useProfileModel from './Profile/AuthorProfile.model'
import ScreenView from '@/components/ScreenView'

const BookView = ({
  scrollViewRef,
  book,
  books,
}: ReturnType<typeof useBookModel>) => {
  return (
    <ScreenView scrollViewRef={scrollViewRef}>
      <StatusRentalView {...useStatusRentalModel()} />

      <InfosView {...useInfosModel()}>
        <StatusFavoriteView {...useStatusFavoriteModel()} />
      </InfosView>

      <InfosTime />

      <DescriptionView {...useDescriptionModel()} />

      <ChaptersView {...useChapterModel()} />

      <AuthorProfileView {...useProfileModel()} />

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
