import React from 'react'
import { ScreenView, SectionBooks } from '@/components'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import { View } from 'react-native'

import TopicsExplorer from './Topics/topics-explorer'
import useHomeModel from './Home.model'
import Header from './Header'
import Search from './Search'
import SearchResults from './SearchResults'

const HomeView = ({ search, books }: ReturnType<typeof useHomeModel>) => {
  return (
    <ScreenView className="w-full">
      <Header />
      <Search />
      {search === '' && (
        <>
          <TopicsExplorer />
          <View className="flex-col" style={{ gap: 32 }}>
            <SectionBooks
              books={shuffleArray(
                books.filter((book) => book.category === 'Ficção'),
              )}
              title="Ficção"
            />
            <SectionBooks
              books={shuffleArray(
                books.filter((book) => book.category === 'Mitologia'),
              )}
              title="Mitologia"
            />
          </View>
        </>
      )}
      <SearchResults />
    </ScreenView>
  )
}

export default HomeView
