import { Divisor, ScreenView } from '@/components'
import React from 'react'
import Header from './Header'
import UserAccount from './UserAccount'
import SectionsAccount from './SectionsAccount'

const Menu = () => {
  return (
    <ScreenView className="mx-5 w-full pt-0">
      <Header />
      <UserAccount />
      <Divisor />
      <SectionsAccount />
    </ScreenView>
  )
}

export default Menu
