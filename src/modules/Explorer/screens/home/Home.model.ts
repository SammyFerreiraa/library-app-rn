import { useBook } from '@/hooks/useBook'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'
import { useSearch } from '../../hooks/useSearch'

type RootStackParamList = {
  book: { isbn: string } | undefined
}

const useHomeModel = () => {
  const { search, setSearch } = useSearch()
  const { books } = useBook()
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

  return {
    search,
    setSearch,
    books,
    nav,
  }
}

export default useHomeModel
