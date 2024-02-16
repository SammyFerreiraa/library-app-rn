import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Stories } from './stories-book-home'
import { SectionView } from './section-view-home'
import { Banner } from './banner-home'
import { SectionBooks } from '../../components/section-books'
import { Header } from './header-home'
import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'
import { useBook } from '@/hooks/useBook'

const Home = () => {
  const { setBooks, books } = useBook()
  const { authData } = useAuth()
  useEffect(() => {
    const getBooks = async () => {
      await axios
        .get('http://10.0.0.106:3000/books', {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
        })
        .then((res) => {
          console.log(1)
          setBooks(res.data)
        })
    }
    getBooks()
  }, [authData?.token, setBooks])

  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        className="flex-1 pt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}
      >
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
      </ScrollView>
    </View>
  )
}

export default Home
