import React from 'react'
import { ScrollView, View } from 'react-native'
import { Stories } from './stories-book-home'
import { SectionView } from './section-view-home'
import { Banner } from './banner-home'
import { SectionBooks } from './recommended-books-home'
import { Header } from './header-home'

const Home = () => {
  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1 bg-black pt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}
      >
        <Header />
        <View className="w-full flex-col" style={{ gap: 32 }}>
          <Stories />
          <SectionView />
          <Banner />
          <View className="flex-col" style={{ gap: 32 }}>
            <SectionBooks />
            <SectionBooks />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
