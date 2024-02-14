import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons'
const Home = () => {
  return (
    <View className="flex-1 bg-black pt-5">
      <View className="mb-6 flex-row items-center justify-between px-4">
        <View className="flex-col gap-1">
          <Text className="text-2xl font-bold text-white">Good Afternoon</Text>
          <Image
            alt="vector"
            source={require('../../utils/images/vector.png')}
            className="h-1 w-[60px]"
          />
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            alt="profile"
            source={require('../../utils/images/perfil.png')}
            className="h-12 w-12 rounded-full"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-col gap-8">
        <ScrollView
          horizontal
          className="gap-3 pl-2"
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
          <View className="mr-4 h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black">
            <Image
              className="h-16 w-16 rounded-full border-2 "
              source={require('../../utils/books/acotar.jpg')}
              alt={'acotar'}
            />
          </View>
        </ScrollView>
        <ScrollView
          className="gap-1 pl-3"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-center gap-1 rounded-3xl bg-white pb-3 pl-4 pr-5 pt-2">
            <FontAwesome6 name={'fire'} size={18} color={'#313333'} />
            <Text className="font-bold text-[#313333]">Trending</Text>
          </View>
          <View className="flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 bg-black pb-3 pl-4 pr-5 pt-2">
            <Feather name={'book-open'} size={18} color={'#fff'} />
            <Text className="font-semibold text-white">5-Minutes read</Text>
          </View>
          <View className="mr-6 flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 bg-black pb-3 pl-4 pr-5 pt-2">
            <MaterialIcons name="headset" size={18} color={'#fff'} />
            <Text className="font-semibold text-white">Quick Listen</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
