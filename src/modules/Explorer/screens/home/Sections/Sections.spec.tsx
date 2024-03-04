import { render, screen } from '@testing-library/react-native'
import SectionsView from './Sections.view'

const SectionsData = {
  books: [],
}

test('Sections Explorer', () => {
  render(<SectionsView {...SectionsData} />)
  expect(screen.getByText('Ficção')).toBeTruthy()
  expect(screen.getByText('Mitologia')).toBeTruthy()
})
