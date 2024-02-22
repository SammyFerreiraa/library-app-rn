import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
  const nav = useNavigation()
  return (
    <View className="flex-1 flex-row items-center justify-start gap-3 p-4">
      <Entypo
        name="chevron-left"
        size={24}
        color="white"
        onPress={() => nav.goBack()}
      />
      <Text className="text-lg font-semibold text-white">Menu</Text>
    </View>
  )
}

export default Header
