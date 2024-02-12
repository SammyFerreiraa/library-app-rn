import useSignInModel from './SignIn.model'
import SignInView from './SignIn.view'

export default function SignIn() {
  return <SignInView {...useSignInModel()} />
}
