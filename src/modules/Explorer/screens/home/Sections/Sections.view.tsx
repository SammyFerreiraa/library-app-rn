import { SectionBooks } from '@/components'
import { shuffleArray } from '@/utils/functions/shuffleArray'
import React from 'react'
import { View } from 'react-native'
import useSectionsModel from './Sections.model'

const SectionsView = ({ books }: ReturnType<typeof useSectionsModel>) => {
  return (
    <View className="flex-col" style={{ gap: 32 }}>
      <SectionBooks
        books={shuffleArray(books.filter((book) => book.category === 'Ficção'))}
        title="Ficção"
      />
      <SectionBooks
        books={shuffleArray(
          books.filter((book) => book.category === 'Mitologia'),
        )}
        title="Mitologia"
      />
    </View>
  )
}

export default SectionsView
