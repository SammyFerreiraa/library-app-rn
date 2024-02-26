import { useAuth } from '@/hooks/useAuth'
import { useBook } from '@/hooks/useBook'
import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import { useRented } from '@/modules/Library/hooks/useRented'
import axios from 'axios'
import { useEffect } from 'react'

const useHomeModel = () => {
  const { setBooks, books } = useBook()
  const { setCompletedRentals } = useCompletedRentals()
  const { setRented } = useRented()
  const { setFavorites } = useFavorites()
  const { authData } = useAuth()

  useEffect(() => {
    const getBooks = async () => {
      await axios
        .get('http://172.25.253.89:3000/books', {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
        })
        .then((res) => {
          setBooks(res.data)
        })
    }
    getBooks()
    const getLibrary = async () => {
      await axios
        .get(`http://172.25.253.89:3000/rentals/${authData?.user.id}`, {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
        })
        .then((res) => {
          setCompletedRentals(res.data)
        })

      await axios
        .get(`http://172.25.253.89:3000/users`, {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
        })
        .then((res) => {
          setRented(res.data.books)
          setFavorites(res.data.favorites)
        })
    }
    getLibrary()
  }, [
    authData?.token,
    setBooks,
    setCompletedRentals,
    authData?.user.id,
    setRented,
    setFavorites,
  ])

  return { books }
}

export default useHomeModel
