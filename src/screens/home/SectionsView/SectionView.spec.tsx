import { render, screen } from '@testing-library/react-native'
import { SectionView } from '.'

const renderComponent = () => {
  return render(<SectionView />)
}

test('should render correctly', () => {
  renderComponent()
  expect(renderComponent).toBeTruthy()
  expect(screen.getByText('Trending')).toBeTruthy()
})
