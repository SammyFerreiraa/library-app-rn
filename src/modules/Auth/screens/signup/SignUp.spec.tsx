import { fireEvent, render } from '@testing-library/react-native'
import SignUpView from './SignUp.view'

const signUpData = {
  name: '',
  setName: jest.fn(),
  email: '',
  setEmail: jest.fn(),
  handleSignUp: jest.fn(),
  address: '',
  city: '',
  navigate: jest.fn(),
  password: '',
  setAddress: jest.fn(),
  setCity: jest.fn(),
  setPassword: jest.fn(),
}

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest
      .fn()
      .mockImplementation(({ children }) => children),
  }
})

const RenderComponent = () => {
  return render(<SignUpView {...signUpData} />)
}

describe('SignUpView', () => {
  it('should render SignUpView', () => {
    const component = RenderComponent()

    expect(component.getByText('SignUp')).toBeTruthy()
  })

  it('calls handleSignUp when SignUp button is pressed', () => {
    const component = RenderComponent().getByTestId('registerButton')

    fireEvent.press(component)

    expect(signUpData.handleSignUp).toHaveBeenCalled()
  })

  it('change route when SignUp button is pressed', () => {
    const component = RenderComponent().getByTestId('toLoginButton')

    fireEvent.press(component)

    expect(signUpData.navigate).toHaveBeenCalledWith('SignIn')
  })
})
