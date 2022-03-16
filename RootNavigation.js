import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { RestaurantDetail } from './screens/RestaurantDetail';
import { Home } from './screens/Home';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store'

export const RootNavigation = () => {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: true
    }
  return (
      <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home}></Stack.Screen>
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
   
  )
}
