import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Home = () => {
  const { navigate } = useNavigation()
  return (
    <View className='flex-1 items-center justify-center gap-6'>
      <Text>Home</Text>
      <TouchableOpacity activeOpacity={0.7} className='py-2 px-4 bg-red-500 rounded' onPress={() => navigate('Settings' as never)}>
        <Text className='text-white text-xl font-semibold'>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home