import React from 'react'
import { ScrollView, View, Image } from 'react-native'

export const Stories = () => {
  return (
    <ScrollView
      horizontal
      className="gap-0"
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/acotar.jpg')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/futurama.png')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/explore-your-crative.png')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/the-good-guy.png')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/acomaf.jpg')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/acotar.jpg')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/acotar.jpg')}
          alt={'acotar'}
        />
      </View>
      <View className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
        <Image
          className="h-16 w-16 rounded-full border-2 "
          source={require('../../utils/books/acotar.jpg')}
          alt={'acotar'}
        />
      </View>
    </ScrollView>
  )
}
