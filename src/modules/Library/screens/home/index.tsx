import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import SectionSelect from './select-section-library'
import { useCompletedRentals } from '../../hooks/useCompletedRentals'
import { useRented } from '../../hooks/useRented'
import { useFavorites } from '../../hooks/useFavorites'
import { BookSectionLibrary } from '../../components'

const Home = () => {
  const [section, setSection] = useState('Salvos')
  const { completedRentals } = useCompletedRentals()
  const { Rented } = useRented()
  const { Favorites } = useFavorites()

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
          {section === 'Salvos' &&
            Favorites.length > 0 &&
            Favorites.map((favorite) => (
              <BookSectionLibrary key={favorite.id} book={favorite} />
            ))}
          {section === 'Salvos' && Favorites.length === 0 && (
            <Text className="text-xl font-bold text-white">
              Não há livros salvos
            </Text>
          )}
          {section === 'Progresso' &&
            Rented.map((rental) => (
              <BookSectionLibrary key={rental.id} book={rental} />
            ))}
          {section === 'Progresso' && Rented.length === 0 && (
            <Text className="text-xl font-bold text-white">
              Nada em progresso atualmente
            </Text>
          )}
          {section === 'Completos' &&
            completedRentals.length > 0 &&
            completedRentals
              .filter((rental) => rental.returnedAt !== null)
              .map((rental) => (
                <BookSectionLibrary key={rental.id} book={rental.copy.book} />
              ))}
          {section === 'Completos' && completedRentals.length === 0 && (
            <Text className="text-xl font-bold text-white">
              Nenhum livro lido
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
