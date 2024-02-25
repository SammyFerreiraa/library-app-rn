import { useBook } from '@/hooks/useBook'
import useNavigationCustom from '@/hooks/useNavigation'
import { useLocalSearchParams } from 'expo-router'

const useListBooksModel = () => {
  const { nav } = useNavigationCustom()
  const { books } = useBook()
  const { category } = useLocalSearchParams()
  return { nav, books, category }
}

export default useListBooksModel
