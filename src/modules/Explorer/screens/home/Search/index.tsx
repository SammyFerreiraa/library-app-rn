import useSearchModel from './Search.model'
import SearchView from './Search.view'

const Search = () => {
  return <SearchView {...useSearchModel()} />
}

export default Search
