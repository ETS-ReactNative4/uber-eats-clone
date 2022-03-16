import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Icon = ({ icon, text }) => {
  return (
      <TouchableOpacity>
        <View>
            <FontAwesome name={icon} size={25} style={{ marginBottom: 3, alignSelf: 'center' }}></FontAwesome>
            <Text>{ text }</Text>
        </View>
      </TouchableOpacity>
      
    
  )
}
