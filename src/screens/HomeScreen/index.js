import React, { useEffect, useState } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,  SafeAreaView, FlatList,   } from "react-native";
import { fonts, colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";
import PrimaryBackground from "../../components/PrimaryBackground";
const  RenderItem = ({item}) => {
  return(
    <TouchableOpacity style={listitem.mainView}>
        <Image
            source={item.img}
            style={listitem.Img}
        />
        <View style={listitem.BottomView}>
            <Text  style={{color:"#fff",fontSize:RFValue(13), includeFontPadding:false, fontWeight:"800",}}>{item.name}</Text>
            <Text style={{color:colors.lightblack,fontSize:RFValue(11), includeFontPadding:false,}}>{item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}

const ShopScreen = ({navigation, route}) => {

    const [salesDate, setSaleDate] = useState([
        {id:"1", img:require("../../assets/homeimg1.png"), name:"Trouble", colorname:"grey", colorcode:"#000", price:"Natakills"},
        {id:"2", img:require("../../assets/homeimg2.png"), name:"Shallow", colorname:"grey", colorcode:"#000", price:"Lady Gaya"},
        {id:"3", img:require("../../assets/homeimg3.png"), name:"loud", colorname:"grey", colorcode:"#000", price:"Lihana"},

    ])

    return (
        <ScrollView style={{backgroundColor:colors.primarycolor}} contentContainerStyle={{flexGrow:1,paddingBottom :100}} >
            <PrimaryBackground>
                <CustomHeader title={"Home"} isSearchVisible={false} />
                <View style={styles.mianView}>
                    <View style={styles.topHeaderView}>
                        <Text style={styles.headerhightLightColor}>About SOGMG</Text>
                        <Text style={styles.paragraph}>
                        SOGMG is a multimedia Entertainment company that supplies profitable, positive, audio/visual content to a diverse global consumer base. We at SOGMG believe quality entertainment can be realized without compromising  commercial appeal.
                        </Text>
                        <TouchableOpacity style={styles.contactInfoView} onPress={() =>  navigation.navigate("ContactScreen")} >
                            <Ionicons name={"ios-call"} color={colors.white }/>
                            <Text style={styles.contactInfoViewText}>Our Contact Info</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textHeader}>Trending</Text>

                    <FlatList
                        data={salesDate}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                              <RenderItem item={item} />
                            )
                        }}
                    />

                    <View style={styles.DonateView}>
                        <Text style={styles.headerhightLightColor}>Donate</Text>
                        <Text style={styles.paragraph}>
                            Donate for a cause we embark on!
                        </Text>
                        <View style={styles.DonateButton}>
                            <Text style={{ color:colors.white,textAlign:"justify", fontWeight:"800", fontSize:RFValue(10)}}>Donate Now</Text>
                        </View>
                    </View>

                  </View>
            </PrimaryBackground>
        </ScrollView>
    )
}

export default  ShopScreen

const listitem = StyleSheet.create({
  mainView:{
      width:120,
      overflow:"hidden",
      marginRight:20,
      borderRadius:15,
      height:160,
      backgroundColor:"rgba(0,0,0,.3)"
  },
  Img:{
      borderRadius:15,
      width:120, height:110,
  },
  BottomView:{
    width:200,
    height:50,
    paddingHorizontal:15,
    marginTop:5,
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
        marginTop:20,
      fontWeight:"bold",
        color:colors.white,
        fontSize:RFValue(18)
    },
    mianView:{
      width:width,
      paddingHorizontal:15,
      flexGrow:1
    },
    topHeaderView:{
      width:width-30,
      height:180,
      backgroundColor:colors.bgcolor,
      padding:10,
      marginBottom:10,
      borderRadius:10,
    },
    headerhightLightColor:{
      color:colors.textcolor,
      fontWeight:"bold",
      marginBottom:5,
    },
    paragraph:{
      color:colors.white,
      textAlign:"justify",
      marginBottom:5,
      fontSize:RFValue(12)
    },
    contactInfoView:{
      flexDirection:"row",
      backgroundColor:colors.textcolor,
      width:150,
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:10,
      borderRadius:5,
      marginTop:0,
      alignSelf:"flex-end",
      paddingVertical:8
    },
    contactInfoViewText:{
      marginLeft:15,
      color:colors.white,
      textAlign:"justify",
      fontWeight:"800",
      fontSize:RFValue(10)
    },
    DonateView:{
      width:width-30,
      height:110,
      backgroundColor:colors.bgcolor,
      padding:10,
      marginTop:40,
      borderRadius:10,
    },
    DonateButton:{
      flexDirection:"row",
      backgroundColor:colors.textcolor,
      width:100, justifyContent:"center",
      alignItems:"center", paddingHorizontal:10,
      borderRadius:5,
      marginTop:8,
      alignSelf:"flex-end",
      paddingVertical:8
    },
})