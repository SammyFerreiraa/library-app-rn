import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import useSearchResultsModel from './SearchResults.model'

const SearchResultsView = ({
  nav,
  books,
  search,
}: ReturnType<typeof useSearchResultsModel>) => {
  return (
    <>
      {search !== '' && (
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
                className="w-[46%]"
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
      )}
    </>
  )
}

export default SearchResultsView
