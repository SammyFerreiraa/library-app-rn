import React from 'react'
import SearchResultsView from './SearchResults.view'
import useSearchResultsModel from './SearchResults.model'

const SearchResults = () => {
  return <SearchResultsView {...useSearchResultsModel()} />
}

export default SearchResults
