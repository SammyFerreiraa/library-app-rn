import React from 'react'
import useProfileModel from './AuthorProfile.model'
import AuthorProfileView from './AuthorProfile.view'

const AuthorProfile = () => {
  return <AuthorProfileView {...useProfileModel()} />
}

export default AuthorProfile
