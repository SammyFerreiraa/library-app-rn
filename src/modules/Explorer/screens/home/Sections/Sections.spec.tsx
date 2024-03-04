import { render, screen } from '@testing-library/react-native'
import SectionsView from './Sections.view'

const SectionsData = {
  books: [],
}

describe('Sections Explorer', () => {
  it('should render the sections', () => {
    render(<SectionsView {...SectionsData} />)
    expect(screen.getByText('Ficção')).toBeTruthy()
    expect(screen.getByText('Mitologia')).toBeTruthy()
  })
})
