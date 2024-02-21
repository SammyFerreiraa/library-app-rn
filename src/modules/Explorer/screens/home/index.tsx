import { SectionBooks } from '@/components/section-books'
import { useBook } from '@/hooks/useBook'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import SearchExplorer from './search-explorer'
import TopicsExplorer from './topics-explorer'

const Home = () => {
  const { books } = useBook()
  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <View className="mb-7 w-full items-start px-4">
          <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
            Explorer
          </Text>
        </View>
        <SearchExplorer />
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
      </ScrollView>
    </View>
  )
}

export default Home
