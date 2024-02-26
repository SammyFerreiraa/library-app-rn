import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import { useRented } from '@/modules/Library/hooks/useRented'
import { useOptions } from '@/modules/Library/hooks/useOption'

const useListBooksModel = () => {
  const { options } = useOptions()
  const { completedRentals } = useCompletedRentals()
  const { Rented } = useRented()
  const { Favorites } = useFavorites()
  return { options, completedRentals, Rented, Favorites }
}

export default useListBooksModel
