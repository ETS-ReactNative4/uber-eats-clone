import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const RestaurantImage = ({image}) => {
  return (
    <>
      <Image 
        source={{
          uri: image
        }}
        style={{
            width: '100%',
            height: 180
        }}
      ></Image>
      <TouchableOpacity style={{
        position: 'absolute',
        right: 20,
        top: 20,
      }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"></MaterialCommunityIcons>
      </TouchableOpacity>
    </>
    
  )
}
