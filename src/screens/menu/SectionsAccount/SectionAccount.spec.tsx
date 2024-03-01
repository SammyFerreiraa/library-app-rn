import { fireEvent, render, screen } from '@testing-library/react-native'
import SectionAccountView from './SectionAccount.view'

const MockSignOut = jest.fn()

const renderComponent = () => {
  return render(<SectionAccountView signOut={MockSignOut} />)
}

describe('Section Account', () => {
  beforeEach(() => {
    renderComponent()
  })
  it('should render correctly', () => {
    expect(screen.getByText('Sair da conta')).toBeTruthy()
  })
  it('should signOut on press', () => {
    fireEvent.press(screen.getByTestId('sign-out'))
    expect(MockSignOut).toHaveBeenCalled()
  })
})
