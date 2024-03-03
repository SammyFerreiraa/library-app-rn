import { Feather } from '@expo/vector-icons'
import React from 'react'
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Image,
} from 'react-native'
import useStatusRentalModel from './StatusRental.model'

const StatusRentalView = ({
  loading,
  rental,
  title,
  image,
  returnBook,
  rentalBook,
}: ReturnType<typeof useStatusRentalModel>) => {
  return (
    <View className="relative mx-4 mb-8 flex-1 items-center justify-center pt-24">
      <Image
        source={{ uri: image }}
        alt={title}
        className="h-[220px] w-[153px]"
      />
      <View className="absolute -bottom-2 w-full flex-row justify-between rounded-md bg-slate-800 py-4">
        {rental && (
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-center gap-3"
            activeOpacity={0.7}
            onPress={returnBook}
            testID="return-book"
          >
            {loading && (
              <ActivityIndicator
                className="flex-1"
                size="small"
                color="white"
              />
            )}
            {!loading && (
              <View className="flex-row items-center" style={{ gap: 12 }}>
                <Feather name="check-circle" size={24} color="white" />
                <Text className="text-base font-bold text-white">
                  Livro Alugado
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        {!rental && (
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-center gap-3"
            activeOpacity={0.7}
            onPress={rentalBook}
            testID="rental-book"
          >
            {loading && (
              <ActivityIndicator
                className="flex-1"
                size="small"
                color="white"
              />
            )}
            {!loading && (
              <View className="flex-row" style={{ gap: 12 }}>
                <Feather name="book" size={24} color="white" />
                <Text className="text-base font-bold text-white">
                  Alugar Livro
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        <View className="h-6 w-[1px] bg-neutral-500"></View>
        <TouchableOpacity
          className="flex-1 flex-row items-center justify-center gap-3"
          activeOpacity={0.7}
        >
          <Feather name="headphones" size={24} color="white" />
          <Text className="text-base font-bold text-white">Escutar Livro</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StatusRentalView
