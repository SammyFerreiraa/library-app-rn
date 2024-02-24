import React from 'react'
import TopicsExplorerView from './TopicsExplorer.view'
import useTopicsExplorerModel from './TopicsExplorer.model'

const TopicsExplorer = () => {
  return <TopicsExplorerView {...useTopicsExplorerModel()} />
}

export default TopicsExplorer
