import React from 'react'
import SignInPasswordView from './SignInPassword.view'
import useSignInPasswordModel from './SignInPassword.model'

const SignInPassword = () => {
  return <SignInPasswordView {...useSignInPasswordModel()} />
}

export default SignInPassword
