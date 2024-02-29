import { fireEvent, render, screen } from '@testing-library/react-native'
import BannerBook from './banner-book'
import { NavigationContainer } from '@react-navigation/native'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}))

describe('BannerBook', () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <BannerBook image="image" name="name" author="author" isbn="isbn" />
      </NavigationContainer>,
    )
  })

  test('renders book details correctly', () => {
    expect(screen.getByText('name')).toBeTruthy()
    expect(screen.getByText('author')).toBeTruthy()
  })

  test('navigates to book details when banner is pressed', () => {
    fireEvent.press(screen.getByTestId('banner-book'))

    expect(mockNavigate).toHaveBeenCalledWith('book', { isbn: 'isbn' })
  })
})
