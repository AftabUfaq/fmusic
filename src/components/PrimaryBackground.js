
import React from "react";
import {ImageBackground, SafeAreaView} from 'react-native'
const PrimaryBackground = ({ children, borderRadius = 0, ...rest }) => {
  return (
  
      <ImageBackground source={require("../assets/back.png")} style={{width:"100%", flex:1}} >
        {children}
      </ImageBackground>
  );
};

export default PrimaryBackground;
