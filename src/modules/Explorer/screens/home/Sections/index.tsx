import React from 'react'
import SectionsView from './Sections.view'
import useSectionsModel from './Sections.model'

const Sections = () => {
  return <SectionsView {...useSectionsModel()} />
}

export default Sections
