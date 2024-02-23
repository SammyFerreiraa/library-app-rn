import { SectionBooks } from '@/components'
import { useBook } from '@/hooks/useBook'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import SearchExplorer from './search-explorer'
import TopicsExplorer from './topics-explorer'
import ScreenView from '@/components/ScreenView'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'

type RootStackParamList = {
  book: { isbn: string } | undefined
}

const Home = () => {
  const [search, useSearch] = useState('')
  const { books } = useBook()
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <ScreenView className="w-full">
      <View className="mb-7 w-full items-start px-4">
        <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
          Explorer
        </Text>
      </View>
      <SearchExplorer search={search} setSearch={useSearch} />
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
      {search !== '' && (
        <>
          <View
            className="mx-4 flex-row flex-wrap justify-start"
            style={{ gap: 28 }}
          >
            {books
              .filter(
                (book) =>
                  book.title.toLowerCase().includes(search.toLowerCase()) ||
                  book.author.toLowerCase().includes(search.toLowerCase()),
              )
              .map((book) => (
                <TouchableOpacity
                  key={book.id}
                  activeOpacity={0.9}
                  className="w-[46.2%]"
                  onPress={() => nav.navigate('book', { isbn: book.isbn })}
                >
                  <View className="mb-10">
                    <Image
                      source={{ uri: book.image }}
                      alt={book.title}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: 270,
                        marginBottom: 16,
                      }}
                    />
                    <Text
                      className="text-left font-medium text-white"
                      numberOfLines={2}
                    >
                      {book.title}
                    </Text>
                    <Text className="text-left text-gray-400" numberOfLines={1}>
                      {book.author}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </>
      )}
    </ScreenView>
  )
}

export default Home
