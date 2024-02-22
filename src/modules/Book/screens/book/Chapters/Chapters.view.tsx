import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import useChapterModel from './Chapters.model'

const ChaptersView = ({
  chaptersQuantity,
}: ReturnType<typeof useChapterModel>) => {
  return (
    <View className="mb-7 px-4" style={{ gap: 20 }}>
      <Text className="text-2xl font-bold text-white">
        {chaptersQuantity} Capítulos
      </Text>
      <View className="flex-col gap-6">
        <View className="flex-row justify-between">
          <Text className="text-base text-white">01</Text>
          <View className="flex-col justify-between">
            <Text className="text-base font-bold text-white">Introdução</Text>
            <Text className="line-clamp-1 text-sm text-neutral-500">
              Subscribe to unlock all 2 key ideas from book{' '}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-9 w-9 items-center justify-center rounded-full bg-white"
          >
            <Feather name="play" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-base text-white">02</Text>
          <View className="flex-col justify-between">
            <Text className="text-base font-bold text-white">Criação</Text>
            <Text className="line-clamp-1 text-sm text-neutral-500">
              Subscribe to unlock all 2 key ideas from book{' '}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
          >
            <Feather name="lock" size={15} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-base text-white">03</Text>
          <View className="flex-col justify-between">
            <Text className="text-base font-bold text-white">Aplicação</Text>
            <Text className="line-clamp-1 text-sm text-neutral-500">
              Subscribe to unlock all 2 key ideas from book{' '}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
          >
            <Feather name="lock" size={15} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold text-white">Capitulo Final</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
          >
            <Feather name="lock" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChaptersView
