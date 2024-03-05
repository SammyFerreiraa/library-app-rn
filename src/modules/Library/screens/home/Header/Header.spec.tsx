import { render, screen } from '@testing-library/react-native'
import Header from '.'

test('Header Home', () => {
  render(<Header />)
  expect(screen.getByText('My Library')).toBeTruthy()
})
