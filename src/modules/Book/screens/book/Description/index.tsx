import React from 'react'
import useDescriptionModel from './Description.model'
import DescriptionView from './Description.view'

const Description = () => {
  return <DescriptionView {...useDescriptionModel()} />
}

export default Description
