import React from 'react'
import useSectionOptionsModel from './SectionOptions.model'
import SectionOptionsView from './SectionOptions.view'

const SectionOptions = () => {
  return <SectionOptionsView {...useSectionOptionsModel()} />
}

export default SectionOptions
