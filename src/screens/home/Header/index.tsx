import React from 'react'
import HeaderView from './Header.view'
import useHeaderModel from './Header.model'

export const Header = () => {
  return <HeaderView {...useHeaderModel()} />
}
