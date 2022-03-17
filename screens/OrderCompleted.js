import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native'
import { db } from '../firebase';
import { MenuItems } from '../components/restaurantDetail/MenuItems';

export const OrderCompleted = () => {
    
    const [lastOrder, setLastOrder] = useState({ items: [] });
    const {items, restaurantName } = useSelector(state => state.cart.selectedItems);
    
    // '13.5€
    // '13.50'
    // Number(13.50) 13.5
    // [13.5, 20.5, 19.5]
    // reduce [13.5, 20.5, 19.5]
    // reduce 13.5 + 20.5 + 19.5
    // 43.50
    const total = items
        .map((item => Number(item.price.replace('€', ''))))
        .reduce((prev, current) => prev + current, 0)

    const totalEUR = total.toLocaleString("es", {
        style: 'currency',
        currency: 'EUR'
    });

    useEffect( async () => {

        const snaps =  await db.collection('orders').orderBy('createdAt', 'desc').limit(1).get()
        const snapList = snaps.docs;
        snapList.map(doc => {
            setLastOrder(doc.data())
        })
       
    }, [lastOrder]);

  return (
    <SafeAreaView style={{ 
        flex: 1,
        backgroundColor: 'white'
    }}>
        <View style={{
            margin: 15,
            alignItems: 'center',
            height: '100%'
        }}>
            <LottieView 
                style={{ 
                    height: 100,
                    alignSelf: 'center',
                    marginBottom: 30 
                }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={1.2}
                    loop={false}/>
            <Text style={{ fontSize:20, fontWeight: 'bold' }}>Your order at { restaurantName } has been placed for { totalEUR }</Text>
            <ScrollView>
                {/** Menuitems  foods={lastOrder}*/}
                <MenuItems hideCheckbox={true} foods={lastOrder.items}></MenuItems>
            
                {/** Cooking */}
                <LottieView 
                    style={{ 
                        height: 200,
                        alignSelf: 'center',
                    }}
                        source={require('../assets/animations/cooking.json')}
                        autoPlay
                        speed={1.2}
                        loop={false}/>
            </ScrollView>
            
        </View>
    </SafeAreaView>
  )
}
