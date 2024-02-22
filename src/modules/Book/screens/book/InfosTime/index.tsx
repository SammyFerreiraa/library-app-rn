import { Feather, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'

const InfosTime = () => {
  return (
    <View className="mx-4 mb-9">
      <View className="w-full flex-row justify-evenly rounded-md bg-slate-800 py-2">
        <View className="flex-row items-center gap-3">
          <Feather name="clock" size={20} color="white" />
          <Text className="text-sm font-bold text-white">18 min</Text>
        </View>
        <View className="h-6 w-[1px] bg-neutral-500"></View>
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="lightbulb-outline" size={20} color="white" />
          <Text className="text-sm font-bold text-white">6 key</Text>
        </View>
      </View>
    </View>
  )
}

export default InfosTime
