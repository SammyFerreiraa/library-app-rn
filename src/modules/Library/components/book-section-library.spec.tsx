import { fireEvent, render, screen } from '@testing-library/react-native'
import BookSectionLibrary, {
  BookSectionLibraryProps,
} from './book-section-library'
import { NavigationContainer } from '@react-navigation/native'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ navigate: mockNavigate }),
}))

const book: BookSectionLibraryProps = {
  book: {
    author: 'author1',
    id: '123',
    image: 'string1',
    isbn: 'string1',
    title: 'title1',
    rentedAt: '2005-11-16',
    returnedAt: '2021-03-05',
  },
}

const RenderComponent = () => {
  return render(
    <NavigationContainer>
      <BookSectionLibrary book={book.book} />
    </NavigationContainer>,
  )
}

describe('book section library', () => {
  beforeEach(() => {
    RenderComponent()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render correctly', () => {
    expect(screen.getByText('title1')).toBeTruthy()
    expect(screen.getByText('15/11/2005', { exact: false })).toBeTruthy()
    expect(screen.getByText('22:00:00', { exact: false })).toBeTruthy()
    expect(screen.getByText('author1')).toBeTruthy()
  })

  it('should navigate to book screen when book is clicked', () => {
    fireEvent.press(screen.getByText('title1'))
    expect(mockNavigate).toHaveBeenCalledWith('book', { isbn: 'string1' })
  })
})
