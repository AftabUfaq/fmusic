import React from "react";
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
export const getlocationaccesspermission = () => {
  return requestMultiple([PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
       return statuses
    });
}

export const getCurrentLocation = (callback) => {
    return Geolocation.getCurrentPosition(callback)

}
