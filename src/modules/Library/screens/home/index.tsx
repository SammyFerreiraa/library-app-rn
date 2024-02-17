import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import SectionSelect from './select-section-library'
import { useCompletedRentals } from '../../hooks/useCompletedRentals'
import { useRented } from '../../hooks/useRented'

const Home = () => {
  const [section, setSection] = useState('Salvos')
  const { completedRentals } = useCompletedRentals()
  const { Rented } = useRented()

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
        <SectionSelect section={section} setSection={setSection} />
        <View className="flex-row flex-wrap justify-evenly">
          {section === 'Completos' &&
            completedRentals
              .filter((rental) => rental.returnedAt !== null)
              .map((rental) => (
                <TouchableOpacity
                  key={rental.id}
                  activeOpacity={0.7}
                  className="w-[40%]"
                >
                  <View className="mb-10">
                    <Image
                      source={{ uri: rental.copy.book.image }}
                      alt={rental.copy.book.title}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: 270,
                        marginBottom: 16,
                      }}
                    />
                    <Text
                      className="text-left font-medium text-white"
                      numberOfLines={1}
                    >
                      {rental.copy.book.title}
                    </Text>
                    <Text className="text-left text-gray-400" numberOfLines={1}>
                      {rental.copy.book.author}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          {section === 'Progresso' &&
            Rented.map((rental) => (
              <TouchableOpacity
                key={rental.id}
                activeOpacity={0.7}
                className="w-[40%]"
              >
                <View className="mb-10">
                  <Image
                    source={{ uri: rental.image }}
                    alt={rental.title}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 270,
                      marginBottom: 16,
                    }}
                  />
                  <Text
                    className="text-left font-medium text-white"
                    numberOfLines={1}
                  >
                    {rental.title}
                  </Text>
                  <Text className="text-left text-gray-400" numberOfLines={1}>
                    {rental.author}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
