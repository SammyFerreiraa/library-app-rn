import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { View, Text } from 'react-native'

export const Banner = () => {
  const { signOut } = useAuth()
  return (
    <View className="mx-4 flex-col rounded-xl bg-[#2d3047] p-4">
      <Text className="mb-6 text-2xl font-bold text-white">
        Ganhe acesso ilimitado a todos os livros por apenas
      </Text>
      <Text className="mb-10 text-5xl font-bold text-white" onPress={signOut}>
        R$10,99
      </Text>
      <Text className="font-thin text-white">
        *Termos e condições aplicados
      </Text>
    </View>
  )
}
