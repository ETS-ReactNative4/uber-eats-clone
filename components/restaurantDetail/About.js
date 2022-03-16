import React from 'react'
import { Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { MenuItems } from './MenuItems';
import { RestaurantDescription } from './RestaurantDescription';
import { RestaurantImage } from './RestaurantImage';
import { RestaurantName } from './RestaurantName';

export const About = ({ route }) => {
  
    const { name, image, price, reviews, rating, categories } = route.params;
    const formattedCategories = categories.map(cat => cat.title).join(' • ');
    const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 🎫 • ${rating} ⭐  (${reviews})`;

    return (
      <View>
          <RestaurantImage image={image}></RestaurantImage>
          <RestaurantName name={name}></RestaurantName>
          <RestaurantDescription description={description}></RestaurantDescription>  
      </View>
    )
}
