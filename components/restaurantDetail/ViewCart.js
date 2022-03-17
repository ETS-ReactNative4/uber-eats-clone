import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { OrderItem } from './OrderItem';
import {db, firebase} from '../../firebase'

export const ViewCart = () => {
    const [modalVisible, setModalVisible] = useState(false);
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

    const addOrderToFirebase = () => {
                
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: new Date().getTime()
        });
        setModalVisible(false);
    }

    const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        },
    
        modalCheckoutContainer: {
          backgroundColor: "white",
          padding: 16,
          height: 500,
          borderWidth: 1,
        },
    
        restaurantName: {
          textAlign: "center",
          fontWeight: "600",
          fontSize: 18,
          marginBottom: 10,
        },
    
        subtotalContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        },
    
        subtotalText: {
          textAlign: "left",
          fontWeight: "600",
          fontSize: 15,
          marginBottom: 10,
        }

    });

      const checkoutModalContent = () => {
        return (
          <>
            <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subtotalContainer}>
                  <Text style={styles.subtotalText}>Subtotal</Text>
                  <Text>{totalEUR}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 20,
                      backgroundColor: "black",
                      alignItems: "center",
                      padding: 13,
                      borderRadius: 30,
                      width: 300,
                      position: "relative",
                    }}
                    onPress={() => {
                        addOrderToFirebase();
                      //setModalVisible(false);
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                    <Text
                      style={{
                        position: "absolute",
                        right: 20,
                        color: "white",
                        fontSize: 15,
                        top: 17,
                      }}
                    >
                      {total ? totalEUR : ""}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        );
      };

    return (
        <>
        <Modal 
            animationType='slide'
            visible={modalVisible}
            transparent={false}
            onRequestClose={() => { setModalVisible(false)}}>
            { checkoutModalContent() }
        </Modal>
        
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
                                justifyContent: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => setModalVisible(true)}
                            >
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
