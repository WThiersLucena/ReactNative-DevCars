import React, { useState } from "react";

import { StyleSheet, Text, View} from "react-native";



export function Header (){

    return(       
        <View >
            {/* Area Reservada ao Footer */}
          <Text style={styles.header}>Area reservada ao Header</Text>
        </View>
    );
}



const styles = StyleSheet.create({
header:{
      color: "#daa520",
      marginTop:3,
      marginBottom: 1,
      height: 50,
      justifyContent: "center",      
      textAlign: "center",
      backgroundColor: '#302c2c'
      
    },
  });
  