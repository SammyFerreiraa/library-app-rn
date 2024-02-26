import { FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, View, Text } from 'react-native'

const SectionViewView = () => {
  return (
    <ScrollView
      className="gap-0"
      horizontal
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex-row items-center justify-center gap-1 rounded-3xl bg-white pb-3 pl-4 pr-5 pt-2">
        <FontAwesome6 name={'fire'} size={18} color={'#313333'} />
        <Text className="font-bold text-[#313333]">Trending</Text>
      </View>
      <View className="flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 bg-black pb-3 pl-4 pr-5 pt-2">
        <Feather name={'book-open'} size={18} color={'#fff'} />
        <Text className="font-semibold text-white">5-Minutes read</Text>
      </View>
      <View className="flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 bg-black pb-3 pl-4 pr-5 pt-2">
        <MaterialIcons name="headset" size={18} color={'#fff'} />
        <Text className="font-semibold text-white">Quick Listen</Text>
      </View>
    </ScrollView>
  )
}

export default SectionViewView
