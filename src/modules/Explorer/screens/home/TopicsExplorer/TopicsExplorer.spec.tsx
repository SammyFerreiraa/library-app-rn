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
})
