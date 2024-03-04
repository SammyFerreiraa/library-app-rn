import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'
import SearchResultsView from './SearchResults.view'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/hooks/useNavigation'
import SearchView from '../Search/Search.view'

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
      author: 'author',
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

const setSearchMock = jest.fn()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const searchBooks = (author: string, books: any) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  books.filter((book: any) =>
    book.author.toLowerCase().includes(author.toLowerCase()),
  )

describe('SearchResult Explorer', () => {
  it('filter books by an author', () => {
    const books = [
      { title: 'Livro 1', author: 'Autor 1' },
      { title: 'Livro 2', author: 'Autor 2' },
      { title: 'Livro 3', author: 'Autor 1' },
    ]

    // Renderiza o componente
    const { getByTestId } = render(
      <SearchView search="" setSearch={setSearchMock} />,
    )

    // Obtém o TextInput
    const searchInput = getByTestId('searchInput')

    // Dispara a mudança no TextInput
    fireEvent.changeText(searchInput, 'Autor 1')

    // Verifica se setSearch é chamada corretamente
    expect(setSearchMock).toHaveBeenCalledWith('Autor 1')

    // Chama a função de filtragem (pode ser uma função fictícia)
    const searchResult = searchBooks('Autor 1', books)

    // Verifica se o resultado da pesquisa é o esperado
    expect(searchResult).toEqual([
      { title: 'Livro 1', author: 'Autor 1' },
      { title: 'Livro 3', author: 'Autor 1' },
    ])
  })

  test('SearchResult Explorer', () => {
    RenderComponent()

    expect(screen.getByText('corte de b')).toBeTruthy()
    expect(screen.getByText('corte de a')).toBeTruthy()

    fireEvent.press(screen.getByText('corte de a'))

    expect(mockNavigate).toHaveBeenCalledWith('book', { isbn: '321' })
  })
})
