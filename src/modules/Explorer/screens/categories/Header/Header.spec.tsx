import { fireEvent, render, screen } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderView from './Header.view'
import { RootStackParamList } from '@/hooks/useNavigation'
import { StackNavigationProp } from '@react-navigation/stack'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: mockNavigate }),
}))

const RenderComponent = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  render(<HeaderView nav={nav} category={'Ficção'} />)
}

describe('Header Explorer', () => {
  beforeEach(() => {
    RenderComponent()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the header', () => {
    expect(HeaderView).toBeTruthy()
    expect(screen.getByText('Ficção')).toBeTruthy()
  })

  it('should go back', () => {
    fireEvent.press(screen.getByText(''))
    expect(mockNavigate).toHaveBeenCalled()
  })
})
