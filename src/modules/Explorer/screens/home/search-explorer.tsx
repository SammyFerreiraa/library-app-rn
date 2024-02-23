import { AntDesign, Feather } from '@expo/vector-icons'
import React, { Dispatch } from 'react'
import { View, TextInput } from 'react-native'

const SearchExplorer = ({
  search,
  setSearch,
}: {
  search: string
  setSearch: Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <View className="mx-4 mb-11 items-center" style={{ position: 'relative' }}>
      <AntDesign
        name="search1"
        size={18}
        color="#939999"
        style={{ top: 17, left: 16, position: 'absolute', zIndex: 2 }}
      />
      <TextInput
        placeholder="Titulo, Autor, etc..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor={'#939999'}
        className="w-full rounded-md border-[1px] border-[#939999] bg-[#313333] py-3 pl-11 pr-11 text-white"
        returnKeyType="next"
      />
      {search !== '' && (
        <Feather
          name="x"
          size={24}
          color="#939999"
          style={{ top: 15, right: 16, position: 'absolute', zIndex: 2 }}
          onPress={() => setSearch('')}
        />
      )}
    </View>
  )
}

export default SearchExplorer
