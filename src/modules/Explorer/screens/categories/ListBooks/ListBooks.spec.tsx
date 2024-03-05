import { render, fireEvent, screen } from '@testing-library/react-native'
import ListBooksView from './ListBooks.view'
import { RootStackParamList } from '@/hooks/useNavigation'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const books = [
  {
    id: '1',
    title: 'Livro 1',
    author: 'Autor 1',
    category: 'Categoria 1',
    isbn: 'isbn1',
    image: 'image1.jpg',
    recommended: true,
    delays: 0,
  },
  {
    id: '2',
    title: 'Livro 2',
    author: 'Autor 2',
    category: 'Categoria 1',
    isbn: 'isbn2',
    image: 'image2.jpg',
    recommended: true,
    delays: 0,
  },
  {
    id: '3',
    title: 'Livro 3',
    author: 'Autor 3',
    category: 'Categoria 2',
    isbn: 'isbn3',
    image: 'image3.jpg',
    recommended: true,
    delays: 0,
  },
]

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ navigate: mockNavigate }),
}))

const RenderComponent = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  render(<ListBooksView books={books} nav={nav} category="Categoria 1" />)
}

describe('<ListBooksView />', () => {
  beforeEach(() => {
    RenderComponent()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render books', () => {
    const livro1 = screen.getByText('Livro 1')
    expect(livro1).toBeTruthy()

    const livro2 = screen.getByText('Livro 2')
    expect(livro2).toBeTruthy()
  })

  it('go to book details', () => {
    fireEvent.press(screen.getByText('Livro 1'))
    expect(mockNavigate).toHaveBeenCalledWith('book', { isbn: 'isbn1' })
  })
})
