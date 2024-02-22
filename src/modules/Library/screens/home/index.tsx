import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SectionSelect from './select-section-library'
import { useCompletedRentals } from '../../hooks/useCompletedRentals'
import { useRented } from '../../hooks/useRented'
import { useFavorites } from '../../hooks/useFavorites'
import { BookSectionLibrary } from '../../components'
import { ScreenView } from '@/components'

export const Home = () => {
  const [section, setSection] = useState('Salvos')
  const { completedRentals } = useCompletedRentals()
  const { Rented } = useRented()
  const { Favorites } = useFavorites()

  return (
    <ScreenView>
      <View className="mb-7 w-full items-start px-4">
        <Text className="border-b-2 border-white text-left text-3xl font-bold text-white">
          My Library
        </Text>
      </View>
      <SectionSelect section={section} setSection={setSection} />
      <View
        className="flex-1 flex-row flex-wrap justify-start px-4"
        style={{ gap: 28 }}
      >
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
            <BookSectionLibrary key={rental.id} book={rental.copy.book} />
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
              <BookSectionLibrary
                key={rental.id}
                book={{
                  ...rental.copy.book,
                  rentedAt: rental.rentedAt,
                  returnedAt: rental.returnedAt,
                }}
              />
            ))}
        {section === 'Completos' && completedRentals.length === 0 && (
          <Text className="text-xl font-bold text-white">
            Nenhum livro lido
          </Text>
        )}
      </View>
    </ScreenView>
  )
}
