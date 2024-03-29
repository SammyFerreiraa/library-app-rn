import { useState } from 'react'
import useBookModel from '../Book.model'
import { RentedProps } from '@/modules/Library/hooks/useRented'
import { Alert } from 'react-native'
import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'
import apiService from '@/modules/Book/services/apiService'

export const useStatusRentalModel = () => {
  const {
    book,
    authData,
    Rented,
    addRented,
    isbn,
    rental,
    returnRented,
    setRental,
  } = useBookModel()

  const [loading, setLoading] = useState(false)
  const rentedBook = Rented.find((book) => book.copy.book.isbn === isbn)
  const { addCompletedRental } = useCompletedRentals()

  const returnBook = () => {
    if (!authData?.token) return
    if (!rentedBook) return
    Alert.alert(
      'Devolver Livro',
      'Deseja realmente devolver este livro?',
      [
        {
          text: 'Cancelar',
          onPress: () => setLoading(false),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => ret() },
      ],
      { cancelable: false },
    )
    const ret = async () => {
      setLoading(true)
      try {
        await apiService(authData?.token)
          .returnBook(rentedBook?.id as string)
          .then(() => {
            addCompletedRental({
              copy: rentedBook?.rental.copy,
              id: rentedBook?.rental.id,
              delay: 0,
              returnedAt: new Date().toString(),
              rentedAt: rentedBook?.rental.rentedAt as string,
            })
            returnRented(rentedBook as RentedProps)
            setRental(false)
            setLoading(false)
          })
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.log((error as any).response.data)
      }
    }
  }

  const rentalBook = () => {
    if (!authData?.token) return
    Alert.alert(
      'Alugar Livro',
      'Deseja realmente alugar este livro?',
      [
        {
          text: 'Cancelar',
          onPress: () => setLoading(false),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => rental() },
      ],
      { cancelable: false },
    )
    const rental = async () => {
      setLoading(true)
      try {
        await apiService(authData?.token)
          .rentalBook(book?.id as string)
          .then((res) => {
            addRented(res.rental)
            setRental(true)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((error as any).response?.status === 433) {
          Alert.alert(
            'Livro Indisponível',
            'Desculpe, mas não há copias desse livro disponível atualmente.',
          )
        }
      }
    }
  }

  return {
    rentalBook,
    returnBook,
    loading,
    title: book?.title,
    image: book?.image,
    rental,
  }
}

export default useStatusRentalModel
