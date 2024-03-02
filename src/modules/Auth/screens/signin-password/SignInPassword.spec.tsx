import { fireEvent, render } from '@testing-library/react-native'
import SignInPasswordView from './SignInPassword.view'

const signInPasswordData = {
  name: 'sammy',
  email: 'sammy@gmail.com',
  handleSignIn: jest.fn(),
  passwordError: true,
  setPassword: jest.fn(),
}

const RenderComponent = () => {
  return render(<SignInPasswordView {...signInPasswordData} />)
}

describe('SignInPasswordView', () => {
  it('should render correctly', () => {
    RenderComponent()
  })

  it('calls handleSignIn when Continue button is pressed', () => {
    const component = RenderComponent().getByTestId('login')
    fireEvent.press(component)

    expect(signInPasswordData.handleSignIn).toHaveBeenCalled()
  })

  it('should render correctly when passwordError is true', () => {
    const component = RenderComponent().getByTestId('passwordTextInput')

    expect(component.props.style).toContainEqual({
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 2,
    })

    expect(component.props.style).toContainEqual({
      borderBottomColor: '#ef4444',
      borderLeftColor: '#ef4444',
      borderRightColor: '#ef4444',
      borderTopColor: '#ef4444',
    })
  })
})
