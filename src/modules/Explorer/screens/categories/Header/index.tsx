import React from 'react'
import HeaderView from './Header.view'
import useHeaderModel from './Header.model'

const Header = () => {
  return <HeaderView {...useHeaderModel()} />
}

export default Header
