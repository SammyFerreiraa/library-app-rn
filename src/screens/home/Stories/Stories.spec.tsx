import { render, screen } from '@testing-library/react-native'
import StoriesView from './Stories.view'
import { View } from 'react-native'

const books = [
  {
    author: 'author',
    image: 'image',
    title: 'title',
    id: '123',
    category: 'category',
    delays: 0,
    recommended: true,
    isbn: 'isbn',
  },
  {
    author: 'author',
    image: 'image',
    title: 'title',
    id: '456',
    category: 'category',
    delays: 0,
    recommended: true,
    isbn: 'isbn',
  },
  {
    author: 'author',
    image: 'image',
    title: 'title',
    id: '789',
    category: 'category',
    delays: 0,
    recommended: true,
    isbn: 'isbn',
  },
  {
    author: 'author',
    image: 'image',
    title: 'title',
    id: '098',
    category: 'category',
    delays: 0,
    recommended: true,
    isbn: 'isbn',
  },
]

const renderComponent = () => {
  return render(<StoriesView books={books} />)
}

test('should render correctly', () => {
  renderComponent()
  const teste = screen.getByTestId('stories')
  expect(teste.findAllByType(View)).toHaveLength(books.length + 1)
})
