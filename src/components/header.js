import React from 'react'
import {View, TouchableOpacity , StatusBar, Text, Image} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { AppImages } from '../assets/Images'
import { colors,  width } from '../constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const CustomHeader = ({title,image, isSearchVisible}) => {
    const navigation = useNavigation();
    return(
        <View style={{flexDirection:"row", width:width, justifyContent:"space-between",alignItems:"center", paddingHorizontal:15, height:80, backgroundColor:"rgba(0,0,0,0)" }}>
            <StatusBar backgroundColor={colors.primarycolor} barStyle="light-content" />
            {
                image?
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <AntDesign name="arrowleft" size={32} color={colors.white} />
                </TouchableOpacity>
                :
                    <Image source={AppImages.headerlogo} style={{height:40, width:70, resizeMode:"contain"}} />
            }

            <Text style={{color:colors.white, fontWeight:"800", fontSize:RFValue(22)}} >{title}</Text>
            {
                isSearchVisible?
                    <TouchableOpacity  style={{width:40,justifyContent:"center", alignItems:"flex-end", height:80}}>
                        <AntDesign name="search1" color={colors.white} size={22} />
                    </TouchableOpacity>
                :   <View style={{width:40, height:40}} />
            }
        </View>
    )
}

export default CustomHeader