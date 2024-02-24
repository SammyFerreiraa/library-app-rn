import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

export const Header = () => {
  const nav = useNavigation()
  return (
    <View className="mb-6 w-full flex-row items-center justify-between px-4">
      <View className="flex-col gap-1">
        <Text className="text-2xl font-bold text-white">Good Afternoon</Text>
        <Image
          alt="vector"
          source={require('../../../utils/images/vector.png')}
          className="h-1 w-[60px]"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          nav.navigate('menu' as never)
        }}
      >
        <Image
          alt="profile"
          source={require('../../../utils/images/perfil.png')}
          className="h-12 w-12 rounded-full"
        />
      </TouchableOpacity>
    </View>
  )
}