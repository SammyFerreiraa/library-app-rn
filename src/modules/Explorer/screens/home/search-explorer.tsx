import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, TextInput } from 'react-native'

const SearchExplorer = () => {
  return (
    <View className="mx-4 mb-11" style={{ position: 'relative' }}>
      <AntDesign
        name="search1"
        size={18}
        color="#939999"
        style={{ top: 17, left: 16, position: 'absolute', zIndex: 2 }}
      />
      <TextInput
        placeholder="Titulo, Autor, etc..."
        placeholderTextColor={'#939999'}
        className="w-full rounded-md border-[1px] border-[#939999] bg-[#313333] py-3 pl-11 text-white"
      />
    </View>
  )
}

export default SearchExplorer
