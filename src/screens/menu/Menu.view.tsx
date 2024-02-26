import { ScreenView, Divisor } from '@/components'
import React from 'react'
import SectionsAccount from './SectionsAccount'
import UserAccount from './UserAccount'
import Header from './Header'

const MenuView = () => {
  return (
    <ScreenView className="mx-5 w-full pt-0">
      <Header />
      <UserAccount />
      <Divisor />
      <SectionsAccount />
    </ScreenView>
  )
}

export default MenuView
