import { useSearch } from '../../hooks/useSearch'

const useHomeModel = () => {
  const { search, setSearch } = useSearch()

  return {
    search,
    setSearch,
  }
}

export default useHomeModel
