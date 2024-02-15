import React from 'react'
import { View, Text } from 'react-native'

export const Banner = () => {
  return (
    <View className="mx-4 flex-col rounded-xl bg-[#2d3047] p-4">
      <Text className="mb-6 text-2xl font-bold text-white">
        Get unlimited access to books in just
      </Text>
      <Text className="mb-10 text-5xl font-bold text-white">$9.99</Text>
      <Text className="font-thin text-white">*Terms & conditions apply</Text>
    </View>
  )
}
