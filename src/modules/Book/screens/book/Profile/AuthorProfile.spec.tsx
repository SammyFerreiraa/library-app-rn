import { render } from '@testing-library/react-native'
import AuthorProfileView from './AuthorProfile.view'

test('Author Profile', () => {
  const component = render(<AuthorProfileView author="sammy" />)

  expect(component.getByText('sammy')).toBeTruthy()
})
