import React from 'react'
import StoriesView from './Stories.view'
import useStoriesModel from './Stories.model'

export const Stories = () => {
  return <StoriesView {...useStoriesModel()} />
}
