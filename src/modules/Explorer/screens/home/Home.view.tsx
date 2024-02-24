import React from 'react'
import { ScreenView } from '@/components'

import useHomeModel from './Home.model'
import Header from './Header'
import Search from './Search'
import SearchResults from './SearchResults'
import TopicsExplorer from './TopicsExplorer'
import Sections from './Sections'

const HomeView = ({ search }: ReturnType<typeof useHomeModel>) => {
  return (
    <ScreenView className="w-full">
      <Header />
      <Search />
      {search === '' && (
        <>
          <TopicsExplorer />
          <Sections />
        </>
      )}
      <SearchResults />
    </ScreenView>
  )
}

export default HomeView
