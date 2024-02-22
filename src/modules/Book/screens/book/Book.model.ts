import { useAuth } from '@/hooks/useAuth'
import { useBook } from '@/hooks/useBook'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import { useRented } from '@/modules/Library/hooks/useRented'
import { useLocalSearchParams } from 'expo-router'
import { useState, useRef, useEffect } from 'react'
import { ScrollView } from 'react-native'

const useBookModel = () => {
  const scrollViewRef = useRef<ScrollView>(null)
  const { authData } = useAuth()
  const { books } = useBook()

  const [favorite, setFavorite] = useState<boolean | undefined>(false)
  const [rental, setRental] = useState<boolean | undefined>(false)

  const { Rented, addRented, returnRented } = useRented()
  const { Favorites, addFavorite, removeFavorite } = useFavorites()

  const { isbn } = useLocalSearchParams()

  const book = books.find((book) => book.isbn === isbn)

  useEffect(() => {
    if (Favorites.some((book) => book.isbn === isbn)) setFavorite(true)
    if (Rented.some((book) => book.copy.book.isbn === isbn)) setRental(true)
    scrollViewRef.current?.scrollTo({ y: 0, animated: true })
  }, [book?.isbn, Favorites, isbn, Rented])

  return {
    scrollViewRef,
    book,
    books,
    authData,
    isbn,

    favorite,
    setFavorite,

    rental,
    setRental,

    addFavorite,
    removeFavorite,

    Rented,
    returnRented,
    addRented,
  }
}

export default useBookModel
