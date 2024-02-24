import { useBook } from '@/hooks/useBook'
import { useSearch } from '../../hooks/useSearch'

const useHomeModel = () => {
  const { search, setSearch } = useSearch()
  const { books } = useBook()

  return {
    search,
    setSearch,
    books,
  }
}

export default useHomeModel
