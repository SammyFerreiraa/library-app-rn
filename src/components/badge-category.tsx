import React from 'react'
import { View, Text } from 'react-native'

type BadgeCategoryProps = {
  category: string
}

const BadgeCategory = ({ category }: BadgeCategoryProps) => {
  return (
    <View className="flex-row items-center">
      <View className="rounded-lg bg-[#313333] px-4 py-2 ">
        <Text className="text-white">{category}</Text>
      </View>
    </View>
  )
}

export default BadgeCategory
