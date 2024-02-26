import React from 'react'
import UserAccountView from './UserAccount.view'
import useUserAccountModel from './UserAccount.model'

const UserAccount = () => {
  return <UserAccountView {...useUserAccountModel()} />
}

export default UserAccount
