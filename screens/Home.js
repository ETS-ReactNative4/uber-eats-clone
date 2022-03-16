import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { HeaderTabs } from '../components/home/HeaderTabs'
import { SearchBar } from '../components/home/SearchBar'
import { Categories } from '../components/home/Categories'
import { RestaurantItems } from '../components/home/RestaurantItems'
import { localRestaurants } from '../data/restaurantData'
import axios from 'axios'
import { Divider } from 'react-native-elements'
import { BottomTabs } from '../components/home/BottomTabs'

const YELP_API_KEY = '21b7oaJ_TNFiW46SC-jaA2Eguosq52Z7QknxJ0MQPaxnf2IuZ56jkNxlNRN9tTjcC40JnPLMzyLcaxcvWH7_mXHauZpAX8NrmRh3KjLGpzo8I7Wz9poQ3DS_i3AuYnYx';


export const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('SanFrancisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }

    try {
      const response = await fetch(yelpUrl, apiOptions);
      const data = await response.json();
      // filtramos los negocios segun el valor que tenga actialmente el activeTab      
      const localListFiltered = data.businesses.filter(business => business.transactions.includes(activeTab.toLowerCase()));

      if (localListFiltered.length <= 0) {
        setRestaurantData(data.businesses)
      } else {
        setRestaurantData(localListFiltered)
      }
      
    }
    catch (e) {
      console.log('a', e)
    }
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])

  return (
   <SafeAreaView style={{
     backgroundColor: '#eee',
     flex: 1
   }}>
      <View style={{
        backgroundColor: 'white',
        padding: 15
      }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}></HeaderTabs>
        <SearchBar cityHandler={setCity}></SearchBar>        
      </View>
      {/* Scroll view para que el navbar no sea sticky */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories></Categories>
        {/** Restaurant List filtered by ActiveTabs */}
        <RestaurantItems navigation={navigation} restaurantData={restaurantData}></RestaurantItems>
      </ScrollView>
      <Divider width={1}></Divider>      
      <BottomTabs></BottomTabs>  
   </SafeAreaView>
  )
}
