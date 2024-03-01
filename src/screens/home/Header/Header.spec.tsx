import { fireEvent, render, screen } from '@testing-library/react-native'
import { Header } from '.'
import { NavigationContainer } from '@react-navigation/native'

const mockNavigator = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigator,
  }),
}))

const renderComponent = () => {
  return render(
    <NavigationContainer>
      <Header />
    </NavigationContainer>,
  )
}

describe('Header HomeScreen', () => {
  beforeEach(() => {
    renderComponent()
  })
  it('should render correctly', () => {
    expect(screen.getByText('Good Afternoon')).toBeTruthy()
  })

  it('should navigate to menu', () => {
    fireEvent.press(screen.getByTestId('menu'))
    expect(mockNavigator).toHaveBeenCalledWith('menu')
  })
})
