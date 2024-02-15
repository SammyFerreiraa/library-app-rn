import BannerBook from '@/components/banner-book'
import { useBook } from '@/hooks/useBook'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableOpacity, ScrollView, Text } from 'react-native'

export const SectionBooks = () => {
  const { books } = useBook()

  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-2xl font-bold text-white">Recomendados</Text>
        <TouchableOpacity
          className="flex-row items-center gap-2"
          activeOpacity={0.7}
        >
          <Text className="text-sm font-semibold text-white">
            Mostrar Todos
          </Text>
          <AntDesign name="rightcircleo" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
      >
        {books.map((book) => (
          <BannerBook
            key={book.id}
            image={book.image}
            name={book.title}
            author={book.author}
          />
        ))}
      </ScrollView>
    </View>
  )
}
