import React from 'react'
import { render } from '@testing-library/react-native'
import ChaptersView from './Chapters.view'

const renderComponent = () => {
  return render(<ChaptersView chaptersQuantity={10} />)
}

test('Chapter renders correctly', () => {
  const component = renderComponent().getByText('10 Capítulos', {
    exact: false,
  })

  expect(component).toBeTruthy()
})
