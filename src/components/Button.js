import React from "react";
import {TouchableOpacity, Text, Dimensions, } from "react-native";
import { colors, fonts, width } from "../constants";

const CustomButton = ({onPress, text}) => {
    return(
        <TouchableOpacity
            onPress={() => onPress()}
        style={{
            width:width/2.5,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            backgroundColor:colors.primarycolor
        }}>
            <Text style={{color:colors.white,textAlign:"center",fontWeight:"800"}} >{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton