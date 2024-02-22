import React from 'react'
import useChapterModel from './Chapters.model'
import ChaptersView from './Chapters.view'

const Chapter = () => {
  return <ChaptersView {...useChapterModel()} />
}

export default Chapter
