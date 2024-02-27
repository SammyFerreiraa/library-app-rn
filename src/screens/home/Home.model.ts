import { useAuth } from '@/hooks/useAuth'
import { useBook } from '@/hooks/useBook'
import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import { useRented } from '@/modules/Library/hooks/useRented'
import HomeService from '@/services/HomeService'
import fetchClient from '@/services/fetchClient'
import { useEffect } from 'react'

const useHomeModel = () => {
  const { setBooks, books } = useBook()
  const { setCompletedRentals } = useCompletedRentals()
  const { setRented } = useRented()
  const { setFavorites } = useFavorites()
  const { authData } = useAuth()

  useEffect(() => {
    const homeService = new HomeService(fetchClient, authData?.token ?? '')

    const getBooks = async () => {
      try {
        setBooks(await homeService.getBooks())
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()

    const getLibrary = async () => {
      try {
        setCompletedRentals(
          await homeService.getCompletedRentals(authData?.user.id ?? ''),
        )
        setRented(await homeService.getRented())
        setFavorites(await homeService.getFavorites())
      } catch (error) {
        console.log(error)
      }
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
