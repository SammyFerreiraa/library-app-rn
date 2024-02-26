import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'
import useHeaderModel from './Header.mode'

const HeaderView = ({ nav }: ReturnType<typeof useHeaderModel>) => {
  return (
    <>
      <View className="flex-1 flex-row items-center justify-start gap-3 p-4">
        <Entypo
          name="chevron-left"
          size={24}
          color="white"
          onPress={() => nav.goBack()}
        />
        <Text className="text-lg font-semibold text-white">Menu</Text>
      </View>
      <View className="mb-7 items-start">
        <Text className="mx-5 border-b-2 border-b-white text-2xl font-bold text-white">
          Conta
        </Text>
      </View>
    </>
  )
}

export default HeaderView
