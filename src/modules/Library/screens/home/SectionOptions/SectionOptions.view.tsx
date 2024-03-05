import React from 'react'
import { Fontisto, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity, Text } from 'react-native'
import useSectionOptionsModel from './SectionOptions.model'

const OptionsSelectView = ({
  options,
  setOptions,
}: ReturnType<typeof useSectionOptionsModel>) => {
  return (
    <ScrollView
      className="mb-7 gap-0"
      horizontal
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${options === 'Salvos' ? 'bg-white' : 'bg-black'}`}
        activeOpacity={0.9}
        onPress={() => setOptions('Salvos')}
      >
        <Fontisto
          name="favorite"
          size={18}
          color={`${options === 'Salvos' ? '#313333' : 'white'}`}
        />
        <Text
          className={`${options === 'Salvos' ? 'text-[#313333]' : 'text-white'} font-bold`}
        >
          Livros Salvos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${options === 'Progresso' ? 'bg-white' : 'bg-black'}`}
        activeOpacity={0.9}
        onPress={() => setOptions('Progresso')}
      >
        <MaterialIcons
          name="headset"
          size={18}
          color={`${options === 'Progresso' ? '#313333' : 'white'}`}
        />
        <Text
          className={`${options === 'Progresso' ? 'text-[#313333]' : 'text-white'} font-bold`}
        >
          Lendo atualmente
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-row items-center justify-center gap-1 rounded-3xl border-[1px] border-neutral-600 pb-3 pl-4 pr-5 pt-2 ${options === 'Completos' ? 'bg-white' : 'bg-black'}`}
        activeOpacity={0.9}
        onPress={() => setOptions('Completos')}
      >
        <AntDesign
          name="checkcircleo"
          size={18}
          color={`${options === 'Completos' ? '#313333' : 'white'}`}
        />
        <Text
          className={`${options === 'Completos' ? 'text-[#313333]' : 'text-white'} font-bold`}
        >
          Lidos
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default OptionsSelectView
