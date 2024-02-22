import { Story } from '@/components'
import { useBook } from '@/hooks/useBook'
import { ScrollView } from 'react-native'
import React from 'react'

export const Stories = () => {
  const { books } = useBook()
  return (
    <ScrollView
      horizontal
      className="gap-0"
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {books
        .filter((book) => book.recommended)
        .slice(0, 8)
        .map((book) => (
          <Story
            key={book.id}
            id={book.id}
            image={book.image}
            title={book.title}
          />
        ))}
    </ScrollView>
  )
}
