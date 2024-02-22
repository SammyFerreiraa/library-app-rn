import { Entypo } from '@expo/vector-icons'
import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from 'react-native'

type ItemSectionProps = TouchableOpacityProps & {
  children: React.ReactNode
}

type ItemSectionIconProps = {
  children: React.ReactNode
}

type ItemSectionTitleProps = {
  title: string
}

const ItemSection = ({ children, ...rest }: ItemSectionProps) => {
  return (
    <TouchableOpacity
      {...rest}
      className="flex-row justify-start"
      style={{ gap: 20 }}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  )
}

const ItemSectionIcon = ({ children }: ItemSectionIconProps) => {
  return (
    <View className="items-center justify-center rounded-lg bg-neutral-700 p-3">
      {children}
    </View>
  )
}

const ItemSectionTitle = ({ title }: ItemSectionTitleProps) => {
  return (
    <View className="flex-1 flex-row items-center justify-between">
      <Text className="text-base font-bold text-white">{title}</Text>
      <Entypo name="chevron-right" size={24} color="white" />
    </View>
  )
}

ItemSection.Icon = ItemSectionIcon
ItemSection.Title = ItemSectionTitle

export default ItemSection
