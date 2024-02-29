import { render } from '@testing-library/react-native'
import BadgeCategory from './badge-category'

test('should render correctly', () => {
  render(<BadgeCategory category="Category" />)
})
