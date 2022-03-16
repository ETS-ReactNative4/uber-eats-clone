import { useState } from 'react';
import { Text, View } from 'react-native'
import { HeaderButton } from './HeaderButton'

export const HeaderTabs = ({ activeTab, setActiveTab }) => {
    //const [activeTab, setActiveTab] = useState("Delivery");
  return (
   <View style={{ 
        flexDirection: "row",
        alignSelf: "center"
    }}>
       <HeaderButton 
            text="Delivery"
            btnColor="black"
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
       <HeaderButton 
            text="Pickup"
            btnColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />   
   </View>
  )
}
