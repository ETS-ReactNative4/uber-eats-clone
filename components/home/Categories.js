import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

export const Categories = () => {

  const items = [
    {
      image: require('../../assets/images/shopping-bag.png'),
      text: 'Pick-up'
    },
    {
      image: require('../../assets/images/soft-drink.png'),
      text: 'Soft Drinks'
    },
    {
      image: require('../../assets/images/bread.png'),
      text: 'Bakery Items'
    },
    {
      image: require('../../assets/images/fast-food.png'),
      text: 'PFast Foods'
    },
    {
      image: require('../../assets/images/coffee.png'),
      text: 'Coffee & Tea'
    },
    {
      image: require('../../assets/images/desserts.png'),
      text: 'Dessets'
    },
  ];

  return (
    <View style={{ 
      marginTop: 5,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingLeft: 20
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop Starts here */}
        { items.map( (item, index) => (
          <View 
          key={index}
          style={{
            alignItems: 'center',
            marginRight: 30
          }}>
            <Image source={item.image} style={{ 
              width: 50,
              height: 40,
              resizeMode: 'contain'
            }}></Image>
              <Text style={{ 
                fontSize: 13,
                fontWeight: '900'
              }}>{ item.text }</Text>
          </View>
        )) }
        
        {/* Loop Finish here */}
      </ScrollView>
    </View>
  )
}
