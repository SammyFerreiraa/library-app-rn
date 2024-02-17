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
          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign
              name="left"
              size={24}
              color="white"
              onPress={() => nav.goBack()}
            />
          </TouchableOpacity>
          <Text className="text-3xl font-bold italic text-white">
            {category}
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-evenly">
          {books
            .filter((book) => book.category === category)
            .map((book) => (
              <TouchableOpacity
                key={book.id}
                activeOpacity={0.7}
                className="w-[45%]"
              >
                <View className="mb-10">
                  <Image
                    source={{ uri: book.image }}
                    alt={book.title}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 270,
                      marginBottom: 16,
                    }}
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
