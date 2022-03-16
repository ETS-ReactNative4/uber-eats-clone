import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { RestaurantImage } from './RestaurantImage'
import { RestaurantInfo } from './RestaurantInfo'

export const RestaurantItems = ({ navigation, restaurantData }) => {
  
  return (
      <>
      {
      restaurantData.map( (restaurant, index) => (
        <TouchableOpacity 
          activeOpacity={0.5} 
          style={{ marginBottom: 30}}  
          key={index} 
          onPress={() => 
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              categories: restaurant.categories,
              rating: restaurant.rating
            })} >
          <View style={{
            marginTop: 10, 
            padding: 15,
            backgroundColor: 'white'
          }} >
              {/** Restaurant Image */}
              <RestaurantImage image={restaurant.image_url}></RestaurantImage>
              {/** Restaurant Info */}
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating}></RestaurantInfo>
          </View>
        </TouchableOpacity>
      ))
      }
   </>

  )
}
