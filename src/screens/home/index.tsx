import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Home = () => {
  const { navigate } = useNavigation()
  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Text>Home</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className="rounded bg-red-500 px-4 py-2"
        onPress={() => navigate('Settings' as never)}
      >
        <Text className="text-xl font-semibold text-white">Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
