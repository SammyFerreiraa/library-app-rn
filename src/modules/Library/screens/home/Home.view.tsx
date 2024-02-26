import React from 'react'
import { ScreenView } from '@/components'
import Header from './Header'
import SectionOptions from './SectionOptions'
import ListBooks from './ListBooks'

const HomeView = () => {
  return (
    <ScreenView>
      <Header />
      <SectionOptions />
      <ListBooks />
    </ScreenView>
  )
}

export default HomeView
