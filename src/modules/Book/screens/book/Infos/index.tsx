import React from 'react'
import InfosView from './Infos.view'
import useInfosModel from './infos.model'
import StatusFavorite from '../StatusFavorite'

const Infos = () => {
  return (
    <InfosView {...useInfosModel()}>
      <StatusFavorite />
    </InfosView>
  )
}

export default Infos
