import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Settings = () => {
  return (
    <View className='flex-1 items-center justify-between py-8w'>
      <Text className='text-3xl font-bold'>Settings</Text>
      <TouchableOpacity activeOpacity={0.7} className='py-2 px-4 bg-red-500 rounded mt-5'>
        <Text className='text-white text-xl font-semibold'>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings