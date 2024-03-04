import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SearchView from './Search.view'

// Mock da função setSearch
const setSearchMock = jest.fn()

describe('SearchView ', () => {
  let component: ReturnType<typeof render>
  beforeEach(() => {
    component = render(<SearchView search="Livro" setSearch={setSearchMock} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render correctly search', () => {
    const searchInput = component.getByTestId('searchInput')

    expect(searchInput.props.value).toBe('Livro')
  })

  it('clean input', () => {
    const clearInputIcon = component.getByTestId('clearInput')

    fireEvent.press(clearInputIcon)

    expect(setSearchMock).toHaveBeenCalledWith('')
  })
})
