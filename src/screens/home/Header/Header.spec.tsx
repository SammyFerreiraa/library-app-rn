import { render } from '@testing-library/react-native'
import { Header } from '.'
import { NavigationContainer } from '@react-navigation/native'

describe('Header', () => {
  it('should render correctly', () => {
    render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>,
    )
  })
})
