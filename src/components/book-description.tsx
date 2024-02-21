import React from 'react'
import { View, Text } from 'react-native'

const BookDescription = () => {
  return (
    <View className="gap-3">
      <Text className="text-xl font-bold text-white">Sobre este livro</Text>
      <Text className="flex-1 text-base leading-5 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nisi?
        Cumque consequuntur animi, in a blanditiis unde perferendis dicta dolore
        ratione deleniti, praesentium nemo dolor sint eveniet doloribus nostrum
        perspiciatis.
      </Text>
    </View>
  )
}

export default BookDescription
