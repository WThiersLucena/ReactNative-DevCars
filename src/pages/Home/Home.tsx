import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";

export function Home() {
  const [saudaçao, setSaudaçao] = useState("");
  const [larguraHome, setLarguraHome] = useState(new Animated.Value(350));
  const [alturaHome, setAlturaHome] = useState(new Animated.Value(350));
  const [display, setDisplay] = useState(true); 

  
  Animated.sequence([
    Animated.timing(larguraHome, {
      toValue: 420,
      duration: 2000,
      useNativeDriver: false,
    }),
    Animated.timing(alturaHome, {
      toValue: 590,
      duration: 1000,
      useNativeDriver: false,
    }),
  ]).start();

  useEffect(() => {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) {
      setSaudaçao("Good morning");
    } else if (horaAtual >= 12 && horaAtual < 18) {
      setSaudaçao("Good after");
    } else {
      setSaudaçao("Good night");
    }
  }, []);


  

  return (
    <View style={styles.container}>
      <View>
        {/* { saudaçao } ESTA CHAMANDO  A CONST DA LINHA 12 */}
        {/*  QUE POR SUA FEZ ESTA SENDO ALTERADA PELO useEFFECT DA LINAH 15 CONFORME DEFINIDO PELO IF */}
        <Text style={styles.saudacao}> {saudaçao}</Text>
        
      </View>
      {/*  View INICIO DA FAIXA PRETA DA ABERTURA DA HOME */}
      <Animated.View
        style={{
          width: larguraHome,
          height: alturaHome,
          backgroundColor: "#000000",
        }}
        
      > 
        <View style={styles.central}>            
          <TouchableOpacity activeOpacity={0.3}>
             <Image
             style={{width:350,height:350, justifyContent:"center",alignItems:"center"}}              
             source={require("../../assets/images/Logo/logo-rev01.png")}/>             
          </TouchableOpacity>            
        </View>
      </Animated.View>
      <Text style={styles.textHome}>Mobile Version</Text>
        

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  central:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 30,
    color: "#daa520",
  },
  saudacao: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#443819",
    margin: 25,
  },
});
