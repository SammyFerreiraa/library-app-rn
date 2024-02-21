import React from 'react'
import { View, Text, Image } from 'react-native'

type AuthorProfileProps = {
  author: string
}

const AuthorProfile = ({ author }: AuthorProfileProps) => {
  return (
    <View
      className="mx-4 mb-9 flex-1 flex-row rounded-xl bg-gray-900 p-4"
      style={{ gap: 16 }}
    >
      <Image
        source={require('../utils/images/perfil.png')}
        className="h-14 w-14 rounded-full"
        alt="perfil"
      />
      <View className="flex-shrink flex-col">
        <Text className="flex-1 text-base font-bold text-white">{author}</Text>
        <Text className="flex-1 text-white">
          Sua carreira envolve a elaboração de livros, artigos, críticas,
          resenhas, crônicas, entre diversos outros gêneros textuais.
        </Text>
      </View>
    </View>
  )
}

export default AuthorProfile
