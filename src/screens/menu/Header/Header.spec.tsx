import { fireEvent, render, screen } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Header from '.'

const mockNavigator = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: mockNavigator,
  }),
}))

const RenderComponent = () => {
  return render(
    <NavigationContainer>
      <Header />
    </NavigationContainer>,
  )
}

describe('Header MenuScreen', () => {
  beforeEach(() => {
    RenderComponent()
  })

  it('should render correctly', () => {
    expect(screen.getByText('Menu')).toBeTruthy()
  })

  it('should goToBack on press', () => {
    fireEvent.press(screen.getByTestId('back-menu'))
    expect(mockNavigator).toHaveBeenCalled()
  })
})
