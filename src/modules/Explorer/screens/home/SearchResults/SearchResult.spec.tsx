import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'
import SearchResultsView from './SearchResults.view'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/hooks/useNavigation'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ navigate: mockNavigate }),
}))

const RenderComponent = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  render(<SearchResultsView {...SearchResultData} nav={nav} />)
}

const SearchResultData = {
  books: [
    {
      id: 'string1',
      title: 'corte de a',
      author: 'string',
      isbn: '321',
      delays: 0,
      image: 'string',
      recommended: false,
      category: 'string',
    },
    {
      id: 'string2',
      title: 'corte de b',
      author: 'string',
      isbn: '123',
      delays: 0,
      image: 'string',
      recommended: false,
      category: 'string',
    },
  ],
  search: 'corte',
}

test('SearchResult Explorer', () => {
  RenderComponent()

  expect(screen.getByText('corte de b')).toBeTruthy()
  expect(screen.getByText('corte de a')).toBeTruthy()

  fireEvent.press(screen.getByText('corte de a'))

  expect(mockNavigate).toHaveBeenCalledWith('book', { isbn: '321' })
})
