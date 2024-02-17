import { MaterialIcons, Fontisto, AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'

const Home = () => {
  const [section, setSection] = useState('Salvos')
  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <View className="mb-7 w-full items-start px-4">
          <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
            My Library
          </Text>
        </View>
        <ScrollView
          className="mb-7 gap-0"
          horizontal
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${section === 'Salvos' ? 'bg-white' : 'bg-black'}`}
            activeOpacity={0.9}
            onPress={() => setSection('Salvos')}
          >
            <Fontisto
              name="favorite"
              size={18}
              color={`${section === 'Salvos' ? '#313333' : 'white'}`}
            />
            <Text
              className={`${section === 'Salvos' ? 'text-[#313333]' : 'text-white'} font-bold`}
            >
              Livros Salvos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${section === 'Progresso' ? 'bg-white' : 'bg-black'}`}
            activeOpacity={0.9}
            onPress={() => setSection('Progresso')}
          >
            <MaterialIcons
              name="headset"
              size={18}
              color={`${section === 'Progresso' ? '#313333' : 'white'}`}
            />
            <Text
              className={`${section === 'Progresso' ? 'text-[#313333]' : 'text-white'} font-bold`}
            >
              Em Progresso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${section === 'Completos' ? 'bg-white' : 'bg-black'}`}
            activeOpacity={0.9}
            onPress={() => setSection('Completos')}
          >
            <AntDesign
              name="checkcircleo"
              size={18}
              color={`${section === 'Completos' ? '#313333' : 'white'}`}
            />
            <Text
              className={`${section === 'Completos' ? 'text-[#313333]' : 'text-white'} font-bold`}
            >
              Completos
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Home
