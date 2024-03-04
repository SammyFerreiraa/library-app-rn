import { fireEvent, render, screen } from '@testing-library/react-native'
import TopicsExplorerView from './TopicsExplorer.view'
import { RootStackParamList } from '@/hooks/useNavigation'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ navigate: mockNavigate }),
}))

const RenderComponent = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  render(<TopicsExplorerView nav={nav} />)
}

test('Topics Explorer', () => {
  RenderComponent()

  fireEvent.press(screen.getByText('Ficção'))
  expect(mockNavigate).toHaveBeenCalledWith('category', { category: 'Ficção' })

  fireEvent.press(screen.getByText('Mitologia'))
  expect(mockNavigate).toHaveBeenCalledWith('category', {
    category: 'Mitologia',
  })

  fireEvent.press(screen.getByText('Romance'))
  expect(mockNavigate).toHaveBeenCalledWith('category', {
    category: 'Romance',
  })

  fireEvent.press(screen.getByText('Mangás'))
  expect(mockNavigate).toHaveBeenCalledWith('category', {
    category: 'Mangás',
  })
})
