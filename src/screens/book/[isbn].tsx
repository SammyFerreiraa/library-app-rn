import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Book = () => {
  const { isbn } = useLocalSearchParams()
  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <Text className="text-3xl font-bold text-white">Book: {isbn}</Text>
      </ScrollView>
    </View>
  )
}

export default Book
