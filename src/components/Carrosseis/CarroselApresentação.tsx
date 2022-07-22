
import React, { useState } from "react";

import { StyleSheet, Text, View,
 TouchableOpacity,Modal,Image,
 Pressable,ScrollView
 } from "react-native";
 
import AppIntroSlider from "react-native-app-intro-slider";

   
 export function CarroselApresentação (){
   
     return (
         <View>
              {/* INICIO DOS CARDS DESTAQUES  { INCIO LINHA 19 ATE LINHA 201 } */}
      <ScrollView
            style={styles.cards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
           
            {/* CARD 1 */}      
              
              <View style={styles.itensMarcaValor}>
              <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/SobreNos/estoque.jpg")}
                />
                <Text style={styles.marcaCard}>Ferrari- Monza</Text>

              </View>
              {/* CARD 3*/}           
              
              <View style={styles.itensMarcaValor}>
              <Image
                  style={{
                    width: '100%',
                    height: '87%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/SobreNos/Lamborghini-aventador-banner.png")}
                />
              <Text style={styles.marcaCard}> Lamborghini Aventador</Text>
              </View>
            
            {/* CARD 2 */}
            
              
              <View style={styles.itensMarcaValor}>
              <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/SobreNos/card-contato.jpg")}
                />

              <Text style={styles.marcaCard}>Nissan GTR</Text>
              </View>
            
            
            

            {/* CARD 4 */}

            
             
              <View style={styles.itensMarcaValor}>
              <Image
                  style={{
                    width: '100%',
                    height: '87%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/SobreNos/Koenigsegg_Gemera.jpg")}
                />
              <Text style={styles.marcaCard}>Koenigsegg Gemera</Text>
              </View>
            
      </ScrollView>
         </View>
     )

 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3a3b3b",
    },
    outerView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#7679589f",
    },
    modalView: {
        marginBottom:10,
      backgroundColor: "#00050a",
      borderRadius: 10,
      height: '85%',
      width: '96%',
      alignItems: "center",
    },  
    cards: {
      maxHeight: 550,
      paddingStart: 5,
      marginTop: 18,
      margin: 5,
      //   marginBottom: 14,
      paddingEnd: 14,
    },
    actionButton: {
      alignItems: "center",
      marginRight: 8,
    },
    areaButton: {
      backgroundColor: "#daa520",
      height: 360,
      width: 360,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    itensMarcaValor:{
        fontWeight:"bold",
        fontSize:19,
        margin: 2,
        backgroundColor: "#1312125f",
        height: 260,
        width: 360,
        borderRadius: 20,
        textAlign: "center",
    },
    marcaCard:{
      fontWeight:"bold",
      fontSize:19,
      backgroundColor: "#c5c5bf9f",
      height: 30,
      width: 350,
      textAlign: "center",
      marginTop:1,
      borderRadius:8,
      marginLeft:5,
    },
    valorCard:{
      fontWeight:"bold",
      fontSize:19,
      height: 60,
      width: 360,
      textAlign: "center",
      color: '#daa520',
      marginTop: 10,
    },
    destaque:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        color: "#dba417",
        margin: 5,
    },
    fichaTecnica:{
        backgroundColor:'#4d4a4a',
        margin: 3,
        color:"#fff",      
    },
    descricaoVeiculo:{
      backgroundColor:'#4d4a4a',
      margin:8,
      color:"#ffff",
      textAlign:"justify",
      lineHeight:25,
      marginLeft: 7,
      borderRadius: 5,
    },
  
  });
  