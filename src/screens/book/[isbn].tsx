import { useBook } from '@/hooks/useBook'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons'

const Book = () => {
  const { isbn } = useLocalSearchParams()
  const { books } = useBook()
  const book = books.find((book) => book.isbn === isbn)
  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <View className="relative mx-4 mb-8 items-center justify-center pt-24">
          <Image
            source={{ uri: book?.image }}
            alt={book?.title}
            className="h-[220px] w-[153px]"
          />
          <View className="absolute -bottom-2 w-full flex-row justify-evenly rounded-md bg-slate-800 py-4">
            <TouchableOpacity className="flex-row gap-3" activeOpacity={0.7}>
              <Feather name="book" size={24} color="white" />
              <Text className="text-base font-bold text-white">Read Nexus</Text>
            </TouchableOpacity>
            <View className="h-6 w-[1px] bg-neutral-500"></View>
            <TouchableOpacity className="flex-row gap-3" activeOpacity={0.7}>
              <Feather name="headphones" size={24} color="white" />
              <Text className="text-base font-bold text-white">Play Nexus</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4 mb-8">
          <View className="flex-row justify-between">
            <Text className="text-3xl font-bold text-white">{book?.title}</Text>
            <Entypo name="heart-outlined" size={29} color="white" />
          </View>
          <Text className="text-sm text-neutral-500">{book?.author}</Text>
        </View>
        <View className="mx-4">
          <View className="w-full flex-row justify-evenly rounded-md bg-slate-800 py-2">
            <View className="flex-row gap-3">
              <Feather name="clock" size={24} color="white" />
              <Text className="text-base font-bold text-white">18 min</Text>
            </View>
            <View className="h-6 w-[1px] bg-neutral-500"></View>
            <View className="flex-row gap-3">
              <MaterialIcons name="lightbulb-outline" size={24} color="white" />
              <Text className="text-base font-bold text-white">6 key</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Book
