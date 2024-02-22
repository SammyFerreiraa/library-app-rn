import React from 'react'
import useStatusRentalModel from './StatusRental.model'
import StatusRentalView from './StatusRental.view'

const StatusRental = () => {
  return <StatusRentalView {...useStatusRentalModel()} />
}

export default StatusRental
