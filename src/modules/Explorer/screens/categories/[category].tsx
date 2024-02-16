import { useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useBook } from '@/hooks/useBook'

export default function Categories() {
  const { category } = useLocalSearchParams()
  const nav = useNavigation()

  const { books } = useBook()

  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="mx-5 flex-1 pt-5"
      >
        <View className="mb-8 flex-col gap-6">
          <AntDesign
            name="left"
            size={24}
            color="white"
            onPress={() => nav.goBack()}
          />
          <Text className="text-3xl font-bold italic text-white">
            {category}
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {books
            .filter((book) => book.category === category)
            .map((book) => (
              <TouchableOpacity key={book.id} activeOpacity={0.7}>
                <View className="mb-10 max-w-[195px]">
                  <Image
                    source={{ uri: book.image }}
                    alt={book.title}
                    resizeMode="cover"
                    className="mb-4 h-[283.03px] w-[195px]"
                  />
                  <Text
                    className="text-left font-medium text-white"
                    numberOfLines={1}
                  >
                    {book.title}
                  </Text>
                  <Text className="text-left text-gray-400" numberOfLines={1}>
                    {book.author}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  )
}
