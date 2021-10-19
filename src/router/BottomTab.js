import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import MusicScreen from '../screens/MusicScreen';
import ShopScreen from '../screens/ShopScreen';
import { colors } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Dimensions,StyleSheet,TouchableOpacity,Image, Text } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();

const BottomMenuItem = ({ iconName,label, isCurrent }) => {
  let  c = isCurrent ? colors.textcolor : colors.white
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      {isCurrent?
      <View
        style={{
          width:10,marginTop:0, height:5,
          borderBottomRightRadius:10,
          borderBottomLeftRadius:10,
          backgroundColor:colors.textcolor
        }}
      />
      :null}
         {
          label == "Home"
          ?
            <Image
                source={require("../assets/home.png")}
                style={{width:20, height:20, tintColor:c, resizeMode:"contain"}}
            />
          :
          label == "Music"?
            <Image
                source={require("../assets/music.png")}
                style={{width:20, height:20,tintColor:c,  resizeMode:"contain"}}
            />
          :
          label =="Events"?
            <Image
                source={require("../assets/events.png")}
                style={{width:20, height:20,tintColor:c,  resizeMode:"contain"}}
            />
          :
            <Image
                source={require("../assets/shop.png")}
                style={{width:20, height:20,tintColor:c,  resizeMode:"contain"}}
            />
         }
         <Text style={{fontSize:RFValue(12),color: c,}}>{label}</Text>
    </View>
  );
};

const MyTabBar = ({ state,descriptors, navigation}) => {
  const totalWidth = Dimensions.get("window").width
  return (
    <View style={[style.tabContainer, { width: totalWidth, backgroundColor:colors.primarycolor }]}>
        <View style={{ flexDirection: "row",  }}>

                {
                    state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel
                    const iconName = options.tabBarIcon
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                          type: "tabPress",
                          target: route.key,
                          canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    }
                    const onLongPress = () => {
                        navigation.emit({
                          type: "tabLongPress",
                          target: route.key,
                        });
                    };
            return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityStates={isFocused ? ["selected"] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1 }}
                  key={index}
                >
                  <BottomMenuItem
                    iconName={iconName.toString()}
                    label={label.toString()}
                    isCurrent={isFocused}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
  );
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      keyboardHidesTabBar={true}
      tabBar={props => <MyTabBar {...props}  />}
      screenOptions={{
          headerShown:false,
          activeTintColor:colors.textcolor,
          inactiveTintColor:colors.white,

      }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen}
            options={{
              tabBarLabel:"Home",
              tabBarIcon:"home"
            }}
        />

        <Tab.Screen name="MusicScreen" component={MusicScreen}
            options={{
              tabBarLabel:"Music",
              tabBarIcon:"user-circle"
            }}
        />

        <Tab.Screen name="EventsScreen" component={EventsScreen}
            options={{
              tabBarLabel:"Events",
              tabBarIcon:"history"
            }}
        />
        <Tab.Screen name="ShopScreen" component={ShopScreen}
            options={{
              tabBarLabel:"Shop",
              tabBarIcon:"history"
            }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator


const style = StyleSheet.create({
  tabContainer: {
    height: 55,


    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

    position: "absolute",
    bottom: 0,
  },

});