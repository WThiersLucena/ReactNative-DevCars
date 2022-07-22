import React, { useState } from "react";

import { StyleSheet, Text, View} from "react-native";



export function Footer (){

    return(       
        <View>
            {/* Area Reservada ao Footer */}
          <Text style={styles.footer}>Area reservada ao Footer</Text>
        </View>
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
  