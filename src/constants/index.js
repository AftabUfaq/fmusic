import React from 'react'
import { Dimensions, Platform } from 'react-native'
export const {width, height} = Dimensions.get("screen")
export const colors = {
    primarycolor:"#383838",
    textcolor:"#1894d3",
    lightblack:"#808080",
    white:"#ffffff",
    lightpink:"#d9c8e4",
    linghtpink2:"#BDADc8",
    darkpink:"#2b0437",
    bgcolor:"rgba(255,255,255,.05)"

}


export const strings = {
    CUSTOMER: "CUTOMER",
    NUMBER: "number",
    LOGOUT: "Logout",
    AUTOMATIC: "automatic",
    MANUAL: "manual",
  }
export const screens = {
    SIGNIIN:'SignInScreen',
    SIGNUP:"SignUpScreen",

}
export const LOGIN  = "LOGIN"
export const LOCAL_LOGIN = "LOCAL_LOGIN"