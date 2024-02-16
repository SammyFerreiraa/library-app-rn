import { useBook } from '@/hooks/useBook'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import React from 'react'
import { ScrollView, View, Image } from 'react-native'

export const Stories = () => {
  const { books } = useBook()
  return (
    <ScrollView
      horizontal
      className="gap-0"
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {shuffleArray(books.filter((book) => book)).map((book) => (
        <View
          className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black"
          key={book.id}
        >
          <Image
            className="h-16 w-16 rounded-full border-2 "
            source={{
              uri: book.image,
            }}
            alt={book.title}
          />
        </View>
      ))}
    </ScrollView>
  )
}
