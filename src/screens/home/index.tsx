import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Stories } from './stories-book-home'
import { SectionView } from './section-view-home'
import { Banner } from './banner-home'
import { SectionBooks } from './recommended-books-home'
import { Header } from './header-home'
import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'
import { bookProps, useBook } from '@/hooks/useBook'

const Home = () => {
  const { setBooks } = useBook()
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
          setBooks(res.data.filter((book: bookProps) => book.recommended))
        })
    }
    getBooks()
  }, [authData?.token, setBooks])

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
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
