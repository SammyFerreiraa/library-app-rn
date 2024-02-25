import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useHeaderModel from './Header.model'

const HeaderView = ({ nav, category }: ReturnType<typeof useHeaderModel>) => {
  return (
    <View className="mb-8 flex-col gap-6">
      <TouchableOpacity activeOpacity={0.7}>
        <AntDesign
          name="left"
          size={24}
          color="white"
          onPress={() => nav.goBack()}
        />
      </TouchableOpacity>
      <Text className="text-3xl font-bold italic text-white">{category}</Text>
    </View>
  )
}

export default HeaderView
