import React from 'react'
import { ScreenView, SectionBooks } from '@/components'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import TopicsExplorer from './Topics/topics-explorer'
import useHomeModel from './Home.model'
import Header from './Header'
import Search from './Search'

const HomeView = ({ search, books, nav }: ReturnType<typeof useHomeModel>) => {
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

export default HomeView
