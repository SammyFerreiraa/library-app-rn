import React from 'react'
import Header from './Header'
import ListBooks from './ListBooks'
import { ScreenView } from '@/components'

const CategoryView = () => {
  return (
    <ScreenView className="mx-5">
      <Header />
      <ListBooks />
    </ScreenView>
  )
}

export default CategoryView
