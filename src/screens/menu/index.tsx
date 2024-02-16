import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Menu = () => {
  const { signOut } = useAuth()
  return (
    <View className="flex-1 items-center justify-between py-8">
      <Text className="text-3xl font-bold">Settings</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-5 rounded bg-red-500 px-4 py-2"
      >
        <Text className="text-xl font-semibold text-white" onPress={signOut}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu
