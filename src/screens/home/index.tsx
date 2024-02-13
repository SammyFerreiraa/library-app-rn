import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
  return (
    <View className="flex-1 bg-black px-4 pt-5">
      <View className="mb-6 flex-row items-center justify-between">
        <View className="flex-col gap-1">
          <Text className="text-2xl font-bold text-white">Good Afternoon</Text>
          <Image
            alt="vector"
            source={require('../../utils/images/vector.png')}
            className="h-1 w-[60px]"
          />
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            alt="profile"
            source={require('../../utils/images/perfil.png')}
            className="h-12 w-12 rounded-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
