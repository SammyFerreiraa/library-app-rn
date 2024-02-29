import React from 'react'
import { render, screen } from '@testing-library/react-native'
import SectionBooks from './section-books'
import { NavigationContainer } from '@react-navigation/native'

test('should render correctly', () => {
  render(
    <NavigationContainer>
      <SectionBooks
        title="title"
        books={[
          {
            author: 'author',
            image: 'image',
            title: 'bookTitle',
            id: 'id',
            category: 'category',
            delays: 0,
            recommended: false,
            isbn: 'isbn',
          },
        ]}
      />
      ,
    </NavigationContainer>,
  )
  expect(screen.getByText('title')).toBeTruthy()
  expect(screen.getByText('author')).toBeTruthy()
  expect(screen.getByText('bookTitle')).toBeTruthy()
})
