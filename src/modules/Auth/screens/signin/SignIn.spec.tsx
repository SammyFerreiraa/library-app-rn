import { fireEvent, render } from '@testing-library/react-native'
import SignInView from './SignIn.view'

const signInData = {
  email: 'sammy@gmail.com',
  emailError: true,
  setEmailInput: jest.fn(),
  handleSignIn: jest.fn(),
  navigate: jest.fn(),
}

const RenderComponent = () => {
  return render(<SignInView {...signInData} />)
}

describe('SignIn', () => {
  it('should render correctly', () => {
    RenderComponent()
  })

  it('calls handleSignIn when Continue button is pressed', () => {
    const component = RenderComponent().getByTestId('signin')

    fireEvent.press(component)

    expect(signInData.handleSignIn).toHaveBeenCalled()
  })

  it('calls navigate when SignUp button is pressed', () => {
    const component = RenderComponent().getByTestId('signup')

    fireEvent.press(component)

    expect(signInData.navigate).toHaveBeenCalledWith('SignUp')
  })

  it('should render correctly when emailTextInput is true', () => {
    const component = RenderComponent().getByTestId('emailTextInput')

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
