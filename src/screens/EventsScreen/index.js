import React, { useEffect, useState } from "react"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,ImageBackground, FlatList,TextInput, Dimensions  } from "react-native";
import { fonts, colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";
import PrimaryBackground from "../../components/PrimaryBackground";
const RenderItem = ({item , navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("EventsDetails")} >
            <ImageBackground
                source={item.img}
                style={styles.bgImg}>
                <Text style={styles.datetimetext}>{item.date} {item.time}</Text>
                <View style={{backgroundColor:"rgba(0,0,0,.2)", borderRadius:10,}}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <MaterialIcons name="location-on" size={22} color={colors.white} />
                        <Text style={styles.locationtext}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const ShopScreen = ({navigation, route}) => {
    const [activeTab , setActiveTab] = useState(false)
    const [salesDate, setSaleDate] = useState([
        {id:"1", img:require("../../assets/event1.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"2", img:require("../../assets/event2.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"3", img:require("../../assets/event3.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"4", img:require("../../assets/event1.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"5", img:require("../../assets/event2.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"6", img:require("../../assets/event3.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"7", img:require("../../assets/event1.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"8", img:require("../../assets/event2.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"9", img:require("../../assets/event3.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
        {id:"10",img:require("../../assets/event1.png"), name:"Music Night", location:"Solomon Lands", date:"3 Sep, 2021", time:"12:00 PM"},
    ])
    return (
        <ScrollView style={{backgroundColor:colors.primarycolor, flexGrow:1}} horizontal={true}  >
            <PrimaryBackground>
                <CustomHeader title={"Events"} isSearchVisible={true} />
                <View style={{width:width, paddingHorizontal:15,}}>
                    <View style={{width:width-30,backgroundColor:"#0000",marginVertical:10, flexDirection:"row"}}>
                        <TouchableOpacity
                            onPress={() => setActiveTab(false)}
                            style={{...styles.tab,borderBottomColor:!activeTab?colors.textcolor:"#0000"}}>
                            <Text
                                style={{
                                    ...styles.tabtext,
                                    color:!activeTab?colors.textcolor:colors.lightblack
                                }}>
                                Upcoming
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setActiveTab(true)}
                            style={{
                                ...styles.tab,marginLeft:20,
                                borderBottomColor:activeTab?colors.textcolor:"#0000"
                            }}>
                            <Text
                                style={{
                                    ...styles.tabtext,
                                    color:activeTab?colors.textcolor:colors.lightblack
                                }}>
                                Trending
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height:40}} />

                    <FlatList
                        data={salesDate}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                              <RenderItem item={item}  navigation={navigation}/>
                            )
                        }}
                    />
            </View>
            </PrimaryBackground>
        </ScrollView>
    )
}

export default  ShopScreen

const styles = StyleSheet.create({
    tab:{
        paddingHorizontal:2,
        borderBottomWidth:2,
        height:40,
        alignItems:"center",justifyContent:"center",
    },
    tabtext:{
        fontSize:RFValue(16),
       fontWeight:"800",
    },
    textHeader:{
      fontWeight:"bold",
        color:colors.white,
        fontSize:RFValue(18)
    },
    bgImg:{width:width-30,
        overflow:"hidden",
        padding:20,
        justifyContent:"space-between",
        marginBottom:20,
        borderRadius:15,
        height:200,
        backgroundColor:"rgba(0,0,0,.3)"
    },
    datetimetext:{
        backgroundColor:colors.textcolor,
       fontWeight:"800",
        includeFontPadding:false,
        padding:5,
        height:25,
        width:150,
        borderRadius:5,
        fontSize:RFValue(12),
        color:colors.white
    },
    nameText:{
       fontWeight:"800",
        includeFontPadding:false,
        padding:5,
        borderRadius:5,
        fontSize:RFValue(22),
        color:colors.white
    },
    locationtext:{
       fontWeight:"800",
        includeFontPadding:false,
        padding:5,
        borderRadius:5,
        fontSize:RFValue(14),
        color:colors.white
    }
})