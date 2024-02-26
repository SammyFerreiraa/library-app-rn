import { Story } from '@/components'
import React from 'react'
import { ScrollView } from 'react-native'
import useStoriesModel from './Stories.model'

const StoriesView = ({ books }: ReturnType<typeof useStoriesModel>) => {
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

export default StoriesView
