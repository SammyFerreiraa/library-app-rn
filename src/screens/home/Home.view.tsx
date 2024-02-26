import { ScreenView, SectionBooks } from '@/components'
import React from 'react'
import { View } from 'react-native'
import { Banner } from './Banner'
import { SectionView } from './SectionsView'
import { Stories } from './Stories'
import { Header } from './Header'
import useHomeModel from './Home.model'

const HomeView = ({ books }: ReturnType<typeof useHomeModel>) => {
  return (
    <ScreenView>
      <Header />
      <View className="w-full flex-col" style={{ gap: 32 }}>
        <Stories />
        <SectionView />
        <Banner />
        <View className="flex-col" style={{ gap: 32 }}>
          <SectionBooks
            books={books.filter((book) => book.recommended)}
            title={'Recomendados'}
          />
          <SectionBooks
            books={books.filter((book) => book.author === 'Rick Riordan')}
            title={'Percy Jackson'}
          />
        </View>
      </View>
    </ScreenView>
  )
}

export default HomeView
