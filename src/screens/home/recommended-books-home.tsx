import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableOpacity, ScrollView, Text, Image } from 'react-native'

export const SectionBooks = () => {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-2xl font-bold text-white">Recomendados</Text>
        <TouchableOpacity
          className="flex-row items-center gap-2"
          activeOpacity={0.7}
        >
          <Text className="text-sm font-semibold text-white">
            Mostrar Todos
          </Text>
          <AntDesign name="rightcircleo" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
      >
        <TouchableOpacity activeOpacity={0.7} className="gap-2">
          <Image
            className="h-[184px] w-[128px]"
            source={require('../../utils/books/acomaf.jpg')}
            alt="book"
          />
          <View className="max-w-[128px] flex-col">
            <Text className="font-bold italic text-white" numberOfLines={1}>
              Corte de nevoa e fúria
            </Text>
            <Text className="italic text-white">Sarah J. Mass</Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 16 }}>
            <View className="flex-row items-center gap-0.5">
              <MaterialIcons name="headset" size={18} color={'gray'} />
              <Text className="text-sm text-neutral-500">8h</Text>
            </View>
            <View className="flex-row items-center gap-0.5">
              <Ionicons name="glasses-outline" size={24} color="gray" />
              <Text className="text-sm text-neutral-500">1.5d</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="gap-2">
          <Image
            className="h-[184px] w-[128px]"
            source={require('../../utils/books/acotar.jpg')}
            alt="book"
          />
          <View className="max-w-[128px] flex-col">
            <Text className="font-bold italic text-white" numberOfLines={1}>
              Corte de espinhos e rosas
            </Text>
            <Text className="italic text-white">Sarah J. Mass</Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 16 }}>
            <View className="flex-row items-center gap-0.5">
              <MaterialIcons name="headset" size={18} color={'gray'} />
              <Text className="text-sm text-neutral-500">4h</Text>
            </View>
            <View className="flex-row items-center gap-0.5">
              <Ionicons name="glasses-outline" size={24} color="gray" />
              <Text className="text-sm text-neutral-500">2d</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="gap-2">
          <Image
            className="h-[184px] w-[128px]"
            source={require('../../utils/books/a-selecao.jpg')}
            alt="book"
          />
          <View className="max-w-[128px] flex-col">
            <Text className="font-bold italic text-white" numberOfLines={1}>
              A Seleção
            </Text>
            <Text className="italic text-white">Kiera Cass</Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 16 }}>
            <View className="flex-row items-center gap-0.5">
              <MaterialIcons name="headset" size={18} color={'gray'} />
              <Text className="text-sm text-neutral-500">4h</Text>
            </View>
            <View className="flex-row items-center gap-0.5">
              <Ionicons name="glasses-outline" size={24} color="gray" />
              <Text className="text-sm text-neutral-500">2d</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="gap-2">
          <Image
            className="h-[184px] w-[128px]"
            source={require('../../utils/books/the-good-guy.png')}
            alt="book"
          />
          <View className="max-w-[128px] flex-col">
            <Text className="font-bold italic text-white" numberOfLines={1}>
              The good guy
            </Text>
            <Text className="italic text-white">Marc Mcallister</Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 16 }}>
            <View className="flex-row items-center gap-0.5">
              <MaterialIcons name="headset" size={18} color={'gray'} />
              <Text className="text-sm text-neutral-500">4h</Text>
            </View>
            <View className="flex-row items-center gap-0.5">
              <Ionicons name="glasses-outline" size={24} color="gray" />
              <Text className="text-sm text-neutral-500">2d</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
