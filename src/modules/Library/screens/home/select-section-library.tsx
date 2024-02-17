import { Fontisto, MaterialIcons, AntDesign } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'

type SectionSelectProps = {
  section: string
  setSection: (section: string) => void
}

const SectionSelect = ({ section, setSection }: SectionSelectProps) => {
  return (
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
          Lendo atualmente
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
          Lidos
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SectionSelect
