import { SectionBooks } from '@/components/section-books'
import { useBook } from '@/hooks/useBook'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const Explorer = () => {
  const { books } = useBook()
  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <View className="mb-7 w-full items-start px-4">
          <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
            Explorer
          </Text>
        </View>
        <View className="mx-4 mb-11" style={{ position: 'relative' }}>
          <AntDesign
            name="search1"
            size={18}
            color="#939999"
            style={{ top: 17, left: 16, position: 'absolute', zIndex: 2 }}
          />
          <TextInput
            placeholder="Titulo, Autor, ISBN..."
            placeholderTextColor={'#939999'}
            className="w-full rounded-md border-[1px] border-[#939999] bg-[#313333] py-3 pl-11 text-white"
          />
        </View>
        <View className="mx-4 mb-10 items-start">
          <Text className="pb-4 text-2xl font-bold text-white">Tópicos</Text>
          <View className="flex-col" style={{ gap: 13 }}>
            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4 py-2"
              >
                <Text className="text-white">Ficção</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Mente e filosofia</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Cultura e sociedade</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Saúde e Fitness</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Biografias</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Life style</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Educação</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Futuro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Tecnologia</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">História</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Hot</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Mangás</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="rounded-lg bg-[#313333] px-4  py-2"
              >
                <Text className="text-white">Novels</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="flex-col" style={{ gap: 32 }}>
          <SectionBooks
            books={books.filter((book) => book.recommended)}
            title="Ficção"
          />
          <SectionBooks
            books={books.filter((book) => book.author === 'Rick Riordan')}
            title="Hot"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Explorer
