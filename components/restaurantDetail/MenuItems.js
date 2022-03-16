import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    foodInfoStyle: {
        width: 240,
        justifyContent: 'space-evenly'
    },
    titleStyle: {
        fontSize: 19, 
        fontWeight: '600'
    },
    foodImageImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    dividerStyle: {
        marginHorizontal: 20
    }

});

export const MenuItems = ({ restaurantName, foods }) => {


    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => {
        if(checkboxValue) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    ...item,
                    restaurantName: restaurantName,
                    checkboxValue: checkboxValue
                }
            })
        } else {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    ...item,
                    restaurantName: restaurantName,
                    checkboxValue: checkboxValue
                }
            })
        }
    }
    
    // Current Items
    const cartItems = useSelector(state => state.cart.selectedItems.items);

    const isFoodInCart = (food, cartItems) => {
        return Boolean(cartItems.find( item => item.title === food.title))
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} contentInsetAdjustmentBehavior="never">
        {
            foods.map( (food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox iconStyle={{
                            borderColor: 'orange',                            
                        }} 
                        fillColor='orange'
                        onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked={isFoodInCart(food, cartItems)}
                        ></BouncyCheckbox>
                        <FoodInfo food={food}/>
                        <FoodImage food={food}></FoodImage>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={styles.dividerStyle}></Divider>    
                </View>                
            ))
        } 
    </ScrollView>    
  )
}



const FoodInfo = (props) => {
    return (
        <View style={styles.foodInfoStyle}>
            <Text style={styles.titleStyle}>{ props.food.title }</Text>
            <Text>{ props.food.description }</Text>
            <Text>{ props.food.price }</Text>
        </View>   
    )    
}

const FoodImage = (props) => {
    return (
        <View>
            <Image source={{ uri: props.food.image }} style={styles.foodImageImageStyle}></Image>
        </View>
    )
}


