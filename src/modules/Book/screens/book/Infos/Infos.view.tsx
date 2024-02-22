import React from 'react'
import { View, Text } from 'react-native'
import useInfosModel from './infos.model'

type InfosViewProps = ReturnType<typeof useInfosModel> & {
  children: React.ReactNode
}

const InfosView = ({ title, author, children }: InfosViewProps) => {
  return (
    <View className="mx-4 mb-9">
      <View className="5flex-1 flex-row  items-center justify-between">
        <Text className="flex-1 text-3xl font-bold text-white">{title}</Text>
        {children}
      </View>
      <Text className="text-sm text-neutral-500">{author}</Text>
    </View>
  )
}

export default InfosView
