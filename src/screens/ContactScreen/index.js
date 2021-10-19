import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,  SafeAreaView, FlatList,   } from "react-native";
import { colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";
import { AppImages } from "../../assets/Images";
import PrimaryBackground from "../../components/PrimaryBackground";


const ContactScreen = ({navigation, route}) => {
   const socialicons = [
        {
           id:"1",
           img:AppImages.facebook,
           link:"fff"
        },
        {
            id:"2",
            img:AppImages.insta,
            link:"fff"
        },
        {
           id:"3",
           img:AppImages.twitter,
           link:"fff"
        },
        {
            id:"1",
            img:AppImages.youtube,
            link:"fff"
        },
        {
            id:"2",
            img:AppImages.linkdin,
            link:"fff"
        },
        {
            id:"3",
            img:AppImages.tiktok,
            link:"fff"
        },
        {
            id:"1",
            img:AppImages.twitch,
            link:"fff"
        },
        {
            id:"2",
            img:AppImages.snapchat,
            link:"fff"
        },
        {
            id:"3",
            img:AppImages.meetup,
            link:"fff"
        },
    ]

    return (
        <ScrollView style={{backgroundColor:colors.primarycolor, flexGrow:1}}>
            <PrimaryBackground>
                <CustomHeader title={"Contact Info"} image={true} isSearchVisible={false} />
                <View style={styles.mianView}>
                    <View style={styles.topHeaderView}>
                        <Text style={styles.headerhightLightColor}>SOGMG LLC USA</Text>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.location} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>16192 Cosastal Hwy Lewes, De 19958</Text>
                        </View>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.phone} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>302-291-2230</Text>
                        </View>
                    </View>
                    <View style={styles.topHeaderView}>
                        <Text style={styles.headerhightLightColor}>SOGMG LLC USA</Text>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.location} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>16192 Cosastal Hwy Lewes, De 19958</Text>
                        </View>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.phone} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>302-291-2230</Text>
                        </View>
                    </View>
                    <View style={styles.topHeaderView}>
                        <Text style={styles.headerhightLightColor}>SOGMG LLC USA</Text>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.location} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>16192 Cosastal Hwy Lewes, De 19958</Text>
                        </View>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.phone} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>302-291-2230</Text>
                        </View>
                    </View>
                    <View style={styles.topHeaderView}>
                        <Text style={styles.headerhightLightColor}>SOGMG LLC USA</Text>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.location} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>16192 Cosastal Hwy Lewes, De 19958</Text>
                        </View>
                        <View style={styles.contactInfoView}>
                            <Image source={AppImages.phone} style={{width:20, height:20}} />
                            <Text style={styles.contactInfoViewText}>302-291-2230</Text>
                        </View>
                    </View>
                    <View style={styles.DonateButton}>
                        <Text style={styles.contactInfoViewText}>Visit our Website</Text>
                    </View>
                    <View  style={{...styles.contactInfoView, marginTop:30}}>
                        {
                            socialicons.map((item, index) => {

                                return(
                                    <TouchableOpacity
                                        onPress={() => alert(item.link)}
                                        key={`${index}`}
                                        style={styles.ContactIcon}>
                                        <Image source={item.img} style={{width:width/20, height:width/20, resizeMode:"contain"}} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </PrimaryBackground>
      </ScrollView>
    )
}

export default  ContactScreen


const styles = StyleSheet.create({
    textHeader:{
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
        height:115,
        backgroundColor:"rgba(255,255,255,.1)",
        padding:10,
        marginBottom:10,
        borderRadius:10,
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
    contactInfoView:{
        flexDirection:"row",
        backgroundColor:"#0000",
        width:width-60,
        alignItems:"center",
        borderRadius:5,
        marginTop:0,
        paddingVertical:8
    },
    contactInfoViewText:{
        marginLeft:15,
        color:colors.white,
        textAlign:"justify",
     fontWeight:"900",
        fontSize:RFValue(13)
    },
    DonateView:{
        width:width-30,
        height:110,
        backgroundColor:"#000",
        padding:10,
        marginTop:10,
        borderRadius:10,
    },
    DonateButton:{
        flexDirection:"row",
        backgroundColor:colors.textcolor,
        width:width-30, justifyContent:"center",
        alignItems:"center", paddingHorizontal:10,
        borderRadius:5,
        marginTop:8,
        alignSelf:"center",
        paddingVertical:8
    },
    ContactIcon:{
        backgroundColor:"rgba(255,255,255,.1)",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        width:width/12,
        height:width/12,
        marginLeft:6,
    }
})