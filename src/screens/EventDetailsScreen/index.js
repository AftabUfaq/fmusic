import React from "react"
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,  SafeAreaView, FlatList, ImageBackground,   } from "react-native";
import { colors } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { width,height  } from "../../constants";
import CustomHeader from "../../components/header";

const EventsDetails = ({navigation, route}) => {
   return (
        <ScrollView style={{backgroundColor:colors.primarycolor, flexGrow:1}}>

            <ImageBackground
                source={require("../../assets/event1.png")}
                style={{width:width,justifyContent:"space-between", height:width/1.2, padding:15}}
            >
                <CustomHeader title={""} image={true} isSearchVisible={false} />
                <View style={{backgroundColor:"rgba(0,0,0,.2)",alignSelf:"baseline", borderRadius:10,}}>
                    <Text style={styles.boldtext}>Music Night</Text>
                    <Text style={styles.date}>3 Sep, 2021</Text>
                </View>
            </ImageBackground>

            <View style={styles.mianView}>
                <View style={styles.topHeaderView}>
                    <Text style={styles.paragraph}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book
                    </Text>
                    <View style={{justifyContent:"space-between", flexDirection:"row",   alignItems:"center", }} >
                        <TouchableOpacity style={styles.IconMainView} onPress={() =>  navigation.navigate("ContactScreen")} >
                            <Image source={require("../../assets/like.png")} style={{width:22, height:22, resizeMode:"contain"}} />
                            <Text style={styles.contactInfoViewText}>12 Likes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconMainView} onPress={() =>  navigation.navigate("ContactScreen")} >
                           <Image source={require("../../assets/views.png")} style={{width:22, height:22, resizeMode:"contain"}} />
                            <Text style={styles.contactInfoViewText}>7 Views</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconMainView} onPress={() =>  navigation.navigate("ContactScreen")} >
                            <Image source={require("../../assets/share.png")} style={{width:22, height:22, resizeMode:"contain"}} />
                            <Text style={styles.contactInfoViewText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.FollowView}>
                    <Image
                        style={{width:60, height:60, borderRadius:80}}
                        source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                    <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                    <TouchableOpacity style={styles.follow}>
                    <Text style={styles.contactInfoViewText}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.CommentView}>
                    <Text style={{...styles.boldtext,fontSize:RFValue(14) }}>Comments</Text>
                    <View style={styles.singleComment}>
                        <Image
                            style={{width:40, height:40, borderRadius:80}}
                            source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                        <View style={{marginLeft:15,}}>
                            <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                            <Text style={{fontWeight:"800",width:width-120,color:colors.white, fontSize:RFValue(10)}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                    </View>
                    <View style={styles.singleComment}>
                        <Image
                            style={{width:40, height:40, borderRadius:80}}
                            source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                        <View style={{marginLeft:15,}}>
                            <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                            <Text style={{fontWeight:"800",width:width-120,color:colors.white, fontSize:RFValue(10)}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                    </View>
                    <View style={styles.singleComment}>
                        <Image
                            style={{width:40, height:40, borderRadius:80}}
                            source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                        <View style={{marginLeft:15,}}>
                            <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                            <Text style={{fontWeight:"800",width:width-120,color:colors.white, fontSize:RFValue(10)}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                    </View>
                    <View style={styles.singleComment}>
                        <Image
                            style={{width:40, height:40, borderRadius:80}}
                            source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                        <View style={{marginLeft:15,}}>
                            <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                            <Text style={{fontWeight:"800",width:width-120,color:colors.white, fontSize:RFValue(10)}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                    </View>
                    <View style={styles.singleComment}>
                        <Image
                            style={{width:40, height:40, borderRadius:80}}
                            source={{uri:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg"}} />
                        <View style={{marginLeft:15,}}>
                            <Text style={styles.contactInfoViewText}>Methews FreeMan</Text>
                            <Text style={{fontWeight:"800",width:width-120,color:colors.white, fontSize:RFValue(10)}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                    </View>

                </View>
            </View>
      </ScrollView>
    )
}

export default  EventsDetails


const styles = StyleSheet.create({

    mianView:{
        width:width,
        paddingHorizontal:15,
        flexGrow:1
    },
    boldtext:{
       fontWeight:"bold",
        includeFontPadding:false,
        padding:5,
        borderRadius:5,
        fontSize:RFValue(22),
        color:colors.white
    },
    date:{
       fontWeight:"bold",
        includeFontPadding:false,
        padding:5,
        borderRadius:5,
        fontSize:RFValue(14),
        color:colors.white
    },
    topHeaderView:{
        width:width-30,
        height:180,
        backgroundColor:"rgba(255,255,255,.1)",
        padding:10,
        marginBottom:10,
        borderRadius:10,
      },
      CommentView:{
        width:width-30,

        backgroundColor:"rgba(255,255,255,.1)",
        padding:10,
        marginBottom:10,
        borderRadius:10,
      },
      paragraph:{
        color:colors.white,
        textAlign:"justify",
        fontWeight:"800",
        fontSize:RFValue(12)
      },
      IconMainView:{
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        borderRadius:5,
        marginTop:0,
        paddingVertical:8
      },
      contactInfoViewText:{
        marginTop:5,
        color:colors.white,
        textAlign:"justify",
       fontWeight:"bold",
        fontSize:RFValue(13)
      },
      follow:{

        backgroundColor:colors.textcolor,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        borderRadius:5,
        marginTop:0,

        paddingVertical:8
      },
      FollowView:{
        width:width-30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,.1)",
        padding:10,
        marginBottom:10,
        borderRadius:10,
      },
      singleComment:{
        width:width-30,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0)",
        padding:10,
        marginBottom:10,
        borderRadius:10,
      },
})