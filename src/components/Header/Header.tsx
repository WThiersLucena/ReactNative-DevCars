import React, { useState } from "react";

import { StyleSheet, Text, View,TouchableOpacity,Image} from "react-native";



export function Header () {

    return(       
      <TouchableOpacity >
      <View style={styles.header} >
        <Image
          style={{
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius:20,
            marginLeft:140,
            margin: 5,
          }}
          source={require("../../assets/images/Estoque/logo-rev01.jpeg")}
        />
      </View>
      
    </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
header:{
      color: "#daa520",
      marginTop:3,
      marginBottom: 1,
      height: 90,
      justifyContent: "center",      
      textAlign: "center",
      backgroundColor: '#2b2727'
      
    },
  });
  