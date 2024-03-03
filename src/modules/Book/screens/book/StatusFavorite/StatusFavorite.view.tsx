import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import useStatusFavoriteModel from './StatusFavorite.model'

const StatusFavoriteView = ({
  favorite,
  addFav,
  removeFav,
}: ReturnType<typeof useStatusFavoriteModel>) => {
  return (
    <>
      {favorite && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={removeFav}
          testID="remove-favorite"
        >
          <Entypo name="heart" size={28} color="red" />
        </TouchableOpacity>
      )}
      {!favorite && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={addFav}
          testID="add-favorite"
        >
          <Entypo name="heart-outlined" size={28} color="white" />
        </TouchableOpacity>
      )}
    </>
  )
}

export default StatusFavoriteView
