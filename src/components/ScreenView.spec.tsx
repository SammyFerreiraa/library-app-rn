import { render } from '@testing-library/react-native'
import ScreenView from './ScreenView'
import { View } from 'react-native'

test('should render correctly', () => {
  render(
    <ScreenView>
      <View></View>
    </ScreenView>,
  )
})
