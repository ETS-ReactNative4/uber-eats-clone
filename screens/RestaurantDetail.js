import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { About } from '../components/restaurantDetail/About'
import { MenuItems } from '../components/restaurantDetail/MenuItems'
import { ViewCart } from '../components/restaurantDetail/ViewCart'


export const RestaurantDetail = ({ route, navigation }) => {


  const foods = [
    {
        title: 'Lassagna',
        description: 'With Butter letucce, tomato and sauce bechamel',
        price: '13.50€',
        image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-de-cocina-lasana-oosqpb4rtcdx9cv8s46v8rj12kdic1hfsy2wfkuvk0.jpg'
    },
    {
        title: 'Lassagna2',
        description: 'With Butter letucce, tomato and sauce bechamel',
        price: '13.50€',
        image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-de-cocina-lasana-oosqpb4rtcdx9cv8s46v8rj12kdic1hfsy2wfkuvk0.jpg'
    },
    {
        title: 'Lassagna3',
        description: 'With Butter letucce, tomato and sauce bechamel',
        price: '13.50€',
        image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-de-cocina-lasana-oosqpb4rtcdx9cv8s46v8rj12kdic1hfsy2wfkuvk0.jpg'
    },
    {
        title: 'Lassagna4',
        description: 'With Butter letucce, tomato and sauce bechamel',
        price: '13.50€',
        image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-de-cocina-lasana-oosqpb4rtcdx9cv8s46v8rj12kdic1hfsy2wfkuvk0.jpg'
    },
    {
        title: 'Lassagna5',
        description: 'With Butter letucce, tomato and sauce bechamel',
        price: '13.50€',
        image: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-de-cocina-lasana-oosqpb4rtcdx9cv8s46v8rj12kdic1hfsy2wfkuvk0.jpg'
    }
];

  return (
    <View style={{ flex: 1 }}>
        {/** Header */}
        <About route={route}></About>
        <Divider width={1.8} style={{ marginVertical: 20 }}></Divider>
        {/** List items */}
        <MenuItems restaurantName={route.params.name} foods={foods}/>
        <ViewCart navigation={navigation}></ViewCart>
  </View>
  )
}
