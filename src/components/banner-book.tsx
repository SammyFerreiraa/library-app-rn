import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

type BannerBookProps = {
  image: string
  name: string
  author: string
  isbn: string
}

type RootStackParamList = {
  book: { isbn: string } | undefined
}

const BannerBook = ({ image, author, name, isbn }: BannerBookProps) => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="gap-2"
      onPress={() => {
        nav.navigate('book', { isbn })
      }}
    >
      <Image
        className="h-[184px] w-[128px]"
        source={{
          uri: image,
        }}
        alt="book"
      />
      <View className="max-w-[128px] flex-col">
        <Text className="font-bold italic text-white" numberOfLines={1}>
          {name}
        </Text>
        <Text className="italic text-white">{author}</Text>
      </View>
      <View className="flex-row items-center" style={{ gap: 16 }}>
        <View className="flex-row items-center gap-0.5">
          <MaterialIcons name="headset" size={18} color={'gray'} />
          <Text className="text-sm text-neutral-500">8h</Text>
        </View>
        <View className="flex-row items-center gap-0.5">
          <Ionicons name="glasses-outline" size={24} color="gray" />
          <Text className="text-sm text-neutral-500">1.5d</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BannerBook
