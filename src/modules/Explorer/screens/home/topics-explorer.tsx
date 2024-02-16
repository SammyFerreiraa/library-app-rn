import { Link } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const TopicsExplorer = () => {
  return (
    <View className="mx-4 mb-10 items-start">
      <Text className="pb-4 text-2xl font-bold text-white">Tópicos</Text>
      <View className="flex-col" style={{ gap: 13 }}>
        <View className="flex-row gap-2">
          <TouchableOpacity
            activeOpacity={0.6}
            className="rounded-lg bg-[#313333] px-4 py-2"
          >
            <Link to={{ screen: 'category', params: { category: 'Ficção' } }}>
              <Text className="text-white">Ficção</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            className="rounded-lg bg-[#313333] px-4  py-2"
          >
            <Link
              to={{ screen: 'category', params: { category: 'Mitologia' } }}
            >
              <Text className="text-white">Mitologia</Text>
            </Link>
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
            <Link to={{ screen: 'category', params: { category: 'Romance' } }}>
              <Text className="text-white">Romance</Text>
            </Link>
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
  )
}

export default TopicsExplorer
