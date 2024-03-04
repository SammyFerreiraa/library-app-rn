import { render } from '@testing-library/react-native'
import HeaderView from './Header.view'

test('Header HomeScreen Explorer', () => {
  render(<HeaderView title="Home" />)
  expect(HeaderView).toBeTruthy()
})
