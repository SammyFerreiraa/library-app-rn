import { Divisor, ScreenView } from '@/components'
import React from 'react'
import Header from './Header'
import { Text, View } from 'react-native'
import UserAccount from './UserAccount'
import SectionsAccount from './SectionsAccount'

const Menu = () => {
  return (
    <ScreenView className="mx-5 w-full pt-0">
      <Header />
      <View className="mb-7 items-start">
        <Text className="mx-5 border-b-2 border-b-white text-2xl font-bold text-white">
          Conta
        </Text>
      </View>

      <UserAccount />
      <Divisor />
      <SectionsAccount />
    </ScreenView>
  )
}

export default Menu
