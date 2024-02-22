import React from 'react'
import useStatusFavoriteModel from './StatusFavorite.model'
import StatusFavoriteView from './StatusFavorite.view'

const StatusFavorite = () => {
  return <StatusFavoriteView {...useStatusFavoriteModel()} />
}

export default StatusFavorite
