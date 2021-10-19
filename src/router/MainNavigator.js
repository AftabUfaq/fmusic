import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from "./BottomTab";
import ContactScreen from '../screens/ContactScreen';
import EventsDetails from '../screens/EventDetailsScreen'
const RootStack = createNativeStackNavigator();
const MainStackScreen = ({navigation}) => {
    return(
        <RootStack.Navigator
            headerMode="float"
            initialRouteName={"BottomTabNavigator"}
        >
            <RootStack.Screen
                options={{
                    headerShown:false
                }}
                name="BottomTabNavigator"
                component={BottomTabNavigator}
            />
            <RootStack.Screen
                name="ContactScreen"
                component={ContactScreen}
                options={{
                    headerShown:false
                }}
            />
            <RootStack.Screen
                name="EventsDetails"
                component={EventsDetails}
                options={{
                    headerShown:false
                }}
            />
        </RootStack.Navigator>
    )
}

export default MainStackScreen;