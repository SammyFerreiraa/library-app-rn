import React from 'react'
import { View, Text } from 'react-native'
import useListBooksModel from './ListBooks.model'
import { BookSectionLibrary } from '@/modules/Library/components'

const ListBooksView = ({
  Favorites,
  Rented,
  options,
  completedRentals,
}: ReturnType<typeof useListBooksModel>) => {
  return (
    <View
      className="flex-1 flex-row flex-wrap justify-start px-4"
      style={{ gap: 28 }}
    >
      {options === 'Salvos' &&
        Favorites.length > 0 &&
        Favorites.map((favorite) => (
          <BookSectionLibrary key={favorite.id} book={favorite} />
        ))}
      {options === 'Salvos' && Favorites.length === 0 && (
        <Text className="text-xl font-bold text-white">
          Não há livros salvos
        </Text>
      )}
      {options === 'Progresso' &&
        Rented.map((rental) => (
          <BookSectionLibrary key={rental.id} book={rental.copy.book} />
        ))}
      {options === 'Progresso' && Rented.length === 0 && (
        <Text className="text-xl font-bold text-white">
          Nada em progresso atualmente
        </Text>
      )}
      {options === 'Completos' &&
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
      {options === 'Completos' && completedRentals.length === 0 && (
        <Text className="text-xl font-bold text-white">Nenhum livro lido</Text>
      )}
    </View>
  )
}

export default ListBooksView
