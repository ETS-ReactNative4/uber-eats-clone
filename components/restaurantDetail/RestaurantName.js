import React from 'react'
import { Text } from 'react-native'

export const RestaurantName = ({name}) => {
  return (
    <Text style={{
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 15
    }}>{ name }</Text>
  )
}
