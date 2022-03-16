import React from 'react'
import { Text, View } from 'react-native'

export const RestaurantInfo = ({name, rating}) => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{
                fontSize: 15, fontWeight: 'bold'
            }}>{ name }</Text>
            <Text style={{
                fontSize: 13, color: 'gray'
            }}>30-45 min</Text>
        </View>        
        <View style={{ 
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15
        }}>
            <Text>{ rating}</Text>
        </View>
        
    </View>
  )
}
