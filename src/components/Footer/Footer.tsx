import React, { useState } from "react";

import { StyleSheet, Text, View,TouchableOpacity,Image} from "react-native";



export function Footer (){

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
            margin: 10,
          }}
          source={require("../../assets/images/Estoque/logo-rev01.jpeg")}
        />
      </View>
      
    </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
footer:{
  color: "#daa520",
  marginTop:3,
  height: 50,
  justifyContent: "center",      
  textAlign: "center",
  backgroundColor: '#302c2c'
    },
  });
  