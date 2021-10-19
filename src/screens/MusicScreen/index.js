import React, { useEffect, useState } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,  StatusBar, FlatList,   } from "react-native";
import {colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";
import PrimaryBackground from '../../components/PrimaryBackground'
const  RenderItem = ({item}) => {
  return(
    <TouchableOpacity style={listitem.mainView}>
        <Image
             source={item.img}
             style={listitem.Img}
             resizeMethod={"resize"}
             resizeMode={"center"}
        />
      <View style={listitem.BottomView}>
          <View>
              <Text style={{color:"#fff", fontWeight:"900"}}>{item.name}</Text>
              <Text style={{color:colors.lightblack,fontSize:RFValue(11), includeFontPadding:false, }}>{item.price}</Text>
          </View>

      </View>
    </TouchableOpacity>
  )
}

const  RenderVideosItem = ({item}) => {
    return(
      <TouchableOpacity style={listitem.mainView}>
          <Image
               source={item.img}
              style={listitem.videoImg}
              resizeMethod={"resize"}
              resizeMode={"center"}
          />

      </TouchableOpacity>
    )
  }

const ShopScreen = ({navigation, route}) => {

    const [salesDate, setSaleDate] = useState([
        {id:"1", img:require("../../assets/SOG_ART_1.png"), name:"Trouble", colorname:"grey", colorcode:"#000", price:"Natakills"},
        {id:"2", img:require("../../assets/SOG_ART_2.png"), name:"Shallow", colorname:"grey", colorcode:"#000", price:"Lady Gaya"},
        {id:"3", img:require("../../assets/SOG_ART_3.png"), name:"loud", colorname:"grey", colorcode:"#000", price:"Lihana"},

    ])

    return (
        <ScrollView style={{backgroundColor:colors.primarycolor, flexGrow:1}} contentContainerStyle={{paddingBottom:100}}>
            <PrimaryBackground>
                <CustomHeader title={"Music & Videos"} isSearchVisible={false} />
                <View style={styles.mianView}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={styles.textHeader}>Popular Music</Text>
                        <TouchableOpacity>
                            <Text style={{color:colors.textcolor,fontWeight:"800"}}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={salesDate}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                                <RenderItem item={item} />
                            )
                        }}
                    />

                    <View style={{flexDirection:"row", marginTop:30, justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={styles.textHeader}>Songs</Text>
                        <TouchableOpacity>
                            <Text style={{color:colors.textcolor, fontWeight:"800"}}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={salesDate}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                            <RenderVideosItem item={item} />
                            )
                        }}
                    />
                    <View style={{flexDirection:"row", marginTop:30, justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={styles.textHeader}>Videos</Text>
                        <TouchableOpacity>
                            <Text style={{color:colors.textcolor, fontWeight:"800"}}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={salesDate}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                            <RenderVideosItem item={item} />
                            )
                        }}
                    />
                </View>
            </PrimaryBackground>
        </ScrollView>
    )
}

export default  ShopScreen

const listitem = StyleSheet.create({
  mainView:{
      width:RFValue(180),
      overflow:"hidden",
      borderRadius:15,
      height:RFValue(150),
      backgroundColor:"rgba(0,0,0,0)"
  },
  Img:{
      borderRadius:15,
      width:RFValue(150),
      height:RFValue(150),
      resizeMode:"contain"
  },
  videoImg:{
    borderRadius:15,
    width:RFValue(150),
    height:RFValue(150),
    resizeMode:"contain"
  },
  BottomView:{
    width:width/1.5,
    height:50,
    paddingHorizontal:15,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row"
   },
   colorview:{
    width:10,
    marginRight:10,
    height:10,
    borderRadius:10,
   }
})

const styles = StyleSheet.create({
    textHeader:{
       fontWeight:"bold",
       marginBottom:5,
        color:colors.white,
        fontSize:RFValue(16)
    },
    mianView:{
      width:width,
      paddingHorizontal:15,
      flexGrow:1
    },

    headerhightLightColor:{
      color:colors.textcolor,
      fontWeight:"800"
    },
    paragraph:{
      color:colors.white,
      textAlign:"justify",
      fontSize:RFValue(12)
    },
})