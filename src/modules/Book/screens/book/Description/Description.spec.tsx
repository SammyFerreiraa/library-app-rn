import { render } from '@testing-library/react-native'
import DescriptionView from './Description.view'

test('Desc', () => {
  const component = render(<DescriptionView category="category" />)

  expect(component.getByText('Sobre este livro')).toBeTruthy()
  expect(component.getByText('category')).toBeTruthy()
})
