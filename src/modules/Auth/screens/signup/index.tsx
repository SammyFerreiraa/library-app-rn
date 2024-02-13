import useSignUpModel from './SignUp.model'
import SignUpView from './SignUp.view'

const SignUp = () => {
  return <SignUpView {...useSignUpModel()} />
}

export default SignUp
