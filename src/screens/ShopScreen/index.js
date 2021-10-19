import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, SafeAreaView, FlatList,TextInput, Dimensions  } from "react-native";
import {  colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";
import PrimaryBackground from "../../components/PrimaryBackground";
const ReturnItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.itemmainView}>
            <Image
                source={item.img}
                style={{
                    borderRadius:15,
                    width:RFValue(150), height:RFValue(150),
                }}
            />
            <View style={styles.listinnettextview}>
                <View>
                    <Text style={{color:"#fff", fontWeight:"800"}}>{item.name}</Text>
                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                        <View style={{width:10 ,marginRight:10, height:10, borderRadius:10, backgroundColor:item.colorcode}} />
                        <Text style={{color:colors.white, fontWeight:"800", fontSize:RFValue(10)}}>{item.colorname}</Text>
                    </View>
                </View>
                <Text  style={{color:colors.textcolor, fontWeight:"800"}}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const RenderItem2 = ({item}) => {
    return(
        <TouchableOpacity style={{width:width-30,overflow:"hidden",flexDirection:"row", marginBottom:20,borderRadius:15, height:RFValue(100), backgroundColor:"rgba(0,0,0,.3)"}}>
                <Image
                    source={item.img}
                    style={{
                        borderRadius:15,
                        width:RFValue(100), height:RFValue(100),
                    }}
                />
                <View style={{width:width-130, height:100, paddingHorizontal:15, alignItems:"flex-start", paddingVertical:15, justifyContent:"space-between", flexDirection:"row" }}>
                    <View>
                        <Text style={{color:"#fff", fontWeight:"800"}}>{item.name}</Text>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                                <View style={{width:10 ,marginRight:10, height:10, borderRadius:10, backgroundColor:item.colorcode}} />
                                <Text style={{color:colors.white, fontWeight:"800", fontSize:RFValue(10)}}>{item.colorname}</Text>
                        </View>
                    </View>
                    <Text  style={{color:colors.textcolor, marginRight:10, alignSelf:"flex-end", fontWeight:"800"}}>{item.price}</Text>
                </View>
        </TouchableOpacity>
    )
}
const ShopScreen = ({navigation, route}) => {
    const [activeTab , setActiveTab] = useState(false)

    const [salesDate, setSaleDate] = useState([
        {id:"1", img:require("../../assets/neck.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"2", img:require("../../assets/mask.png"), name:"Neck Gaiter", colorname:"green", colorcode:"#03fc17", price:"$35"},
        {id:"3", img:require("../../assets/mask2.png"), name:"Neck Gaiter", colorname:"blue", colorcode:"#0025fa", price:"$35"},
        {id:"4", img:require("../../assets/neck.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"5", img:require("../../assets/mask.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"6", img:require("../../assets/mask2.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"7", img:require("../../assets/neck.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"8", img:require("../../assets/mask.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"9", img:require("../../assets/mask2.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
        {id:"10", img:require("../../assets/neck.png"), name:"Neck Gaiter", colorname:"grey", colorcode:"#000", price:"$35"},
    ])

    return (
        <View style={{backgroundColor:colors.primarycolor, flexGrow:1}}  contentContainerStyle={{paddingBottom:100}}>
            <PrimaryBackground>
                <CustomHeader title={"Merch"} isSearchVisible={true} />
                <View style={{width:width, paddingHorizontal:15, flexGrow:1}}>
                    <View style={{width:width-30,backgroundColor:"#0000",marginVertical:10, flexDirection:"row"}}>
                        <TouchableOpacity
                            onPress={() => setActiveTab(false)}
                            style={{...styles.tab,borderBottomColor:!activeTab?colors.textcolor:"#0000"}}>
                            <Text
                                style={{
                                    ...styles.tabtext,
                                    color:!activeTab?colors.textcolor:colors.lightblack
                                }}>
                                New Arrival
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
                                Most Sold
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textHeader}>On Sale</Text>
                    <FlatList
                        data={salesDate}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                                <ReturnItem item={item} navigation={navigation} />
                            )
                        }}
                    />
                   <View  style={{height:40}} />
                    <Text style={styles.textHeader}>New Arrival</Text>
                        <FlatList
                            data={salesDate}

                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                                return(
                                    <RenderItem2 item={item} navigation={navigation} />
                                )
                            }}
                        />
                </View>
            </PrimaryBackground>
        </View>
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
        fontSize:RFValue(18),
        marginBottom:10,
    },
    itemmainView:{
        width:RFValue(150),
        overflow:"hidden",
        marginRight:20,
        borderRadius:15,
        height:RFValue(200),
        backgroundColor:"rgba(0,0,0,.3)"
    },
    listinnettextview:{
        width:RFValue(150),
        height:50,
        paddingHorizontal:15,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    }
})