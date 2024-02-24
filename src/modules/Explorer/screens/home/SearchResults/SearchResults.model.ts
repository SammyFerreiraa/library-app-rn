import { useBook } from '@/hooks/useBook'
import useNavigationHook from '@/hooks/useNavigation'
import { useSearch } from '@/modules/Explorer/hooks/useSearch'

const useSearchResultsModel = () => {
  const { search } = useSearch()
  const { books } = useBook()
  const { nav } = useNavigationHook()

  return { nav, search, books }
}

export default useSearchResultsModel
