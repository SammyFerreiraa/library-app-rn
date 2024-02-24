import React from 'react'
import { View, Text } from 'react-native'
import useHeaderModel from './Header.model'

const HeaderView = ({ title }: ReturnType<typeof useHeaderModel>) => {
  return (
    <View className="mb-7 w-full items-start px-4">
      <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
        {title}
      </Text>
    </View>
  )
}

export default HeaderView
