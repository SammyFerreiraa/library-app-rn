import { fireEvent, render } from '@testing-library/react-native'
import SearchView from './Search.view'

const mockSearch = {
  search: 'livro',
  setSearch: jest.fn(),
}

test('Search Explorer', () => {
  const component = render(<SearchView {...mockSearch} />).getByTestId(
    'searchInput',
  )

  expect(component.props.value).toBe('livro')

  fireEvent.changeText(component, 'novo livro')

  expect(mockSearch.setSearch).toHaveBeenCalledWith('novo livro')
})
