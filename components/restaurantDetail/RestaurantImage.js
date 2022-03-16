import React from 'react'
import { Image } from 'react-native'

export const RestaurantImage = ({image}) => {
  return (
    <Image source={{ uri: image }} style={{ width: '100%', height: 180 }}/>
  )
}
