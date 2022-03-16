import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

export const ViewCart = () => {

    const items = useSelector(state => state.cart.selectedItems.items);
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

    return (
        <>
        { 
            total ? (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 70,
                    zIndex: 999
                }}>
                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <TouchableOpacity  style={{
                                marginTop: 20,
                                backgroundColor: "#252525",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}>
                            <Text style={{ color: 'white', fontSize: 20, marginRight: 20 }}>ViewCart</Text>
                            <Text style={{ color: 'white', fontSize: 20}}>{ totalEUR }</Text>
                        </TouchableOpacity>        
                    </View>
                </View> 
            ) : (
            <></>
            ) 
        }              
        </>
    )
}
