import React from 'react'
import { View } from 'react-native'
import { Icon } from './Icon'


export const BottomTabs = () => {
  return (
    <View style={{
        flexDirection:'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    }}>
        {/* Icon icon text */}
        <Icon icon="home" text="Home" />
        <Icon icon="search" text="Browse" />
        <Icon icon="shopping-bag" text="Grocery" />
        <Icon icon="list" text="Orders" />
        <Icon icon="user" text="Account" />
    </View>    
  )
}
