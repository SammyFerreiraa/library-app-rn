import React from 'react'
import { render } from '@testing-library/react-native'
import SectionBooks from './section-books'

test('should render correctly', () => {
  render(<SectionBooks title="title" books={[]} />)
})
