import { useSearch } from './../../../hooks/useSearch'

const useSearchModel = () => {
  const { setSearch, search } = useSearch()
  return {
    search,
    setSearch,
  }
}

export default useSearchModel
