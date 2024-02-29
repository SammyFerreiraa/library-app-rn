import { render, screen } from '@testing-library/react-native'
import { Header } from '.'
import { NavigationContainer } from '@react-navigation/native'

const renderComponent = () => {
  return render(
    <NavigationContainer>
      <Header />
    </NavigationContainer>,
  )
}

describe('Header HomeScreen', () => {
  it('should render correctly', () => {
    renderComponent()
    expect(screen.getByText('Good Afternoon')).toBeTruthy()
  })
})
