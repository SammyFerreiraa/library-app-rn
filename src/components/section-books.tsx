import BannerBook from '@/components/banner-book'
import { bookProps } from '@/hooks/useBook'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableOpacity, ScrollView, Text } from 'react-native'

export const SectionBooks = ({
  books,
  title,
}: {
  books: bookProps[]
  title: string
}) => {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-2xl font-bold text-white">{title}</Text>
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
        {books.slice(0, 8).map((book) => (
          <BannerBook
            key={book.id}
            image={book.image}
            name={book.title}
            author={book.author}
            isbn={book.isbn}
          />
        ))}
      </ScrollView>
    </View>
  )
}
