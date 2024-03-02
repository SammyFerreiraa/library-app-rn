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

    expect(signInData.navigate).toHaveBeenCalled()
  })

  it('should render correctly when emailError is true', () => {
    const component = RenderComponent().getByTestId('emailTextInput')

    expect(component)
  })
})
