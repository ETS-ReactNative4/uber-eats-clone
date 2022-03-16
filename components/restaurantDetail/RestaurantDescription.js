import React from 'react'
import { Text } from 'react-native'

export const RestaurantDescription = ({ description }) => {
  return (
    <Text style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5
    }}>{ description }</Text>
  )
}
