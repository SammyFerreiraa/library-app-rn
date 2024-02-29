import { render } from '@testing-library/react-native'
import BannerBook from './banner-book'
import { NavigationContainer } from '@react-navigation/native'

test('should render correctly', () => {
  render(
    <NavigationContainer>
      <BannerBook image="image" name="name" author="author" isbn="isbn" />
    </NavigationContainer>,
  )
})
