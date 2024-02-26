import React from 'react'
import HeaderView from './Header.view'
import useHeaderModel from './Header.mode'

const Header = () => {
  return <HeaderView {...useHeaderModel()} />
}

export default Header
