import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useState, useEffect } from "react";

export function Batatinha () {
  const [saudaçao, setSaudaçao] = useState("");
  const [larguraHome, setLarguraHome] = useState(new Animated.Value(0));
  const [alturaHome, setAlturaHome] = useState(30);

  Animated.sequence([
    Animated.timing(
      larguraHome,
      {
        toValue: 420,
        duration: 2000
      }
    ),
    Animated.timing(
      alturaHome,{
        toValue:500,
        duration:1000
      }
    )
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
      <View style={styles.saudacao2}></View>
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
  textHome: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#daa520",
  },
  saudacao: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#443819",
  },
  saudacao2: {
    with: 370,
    height: 30,
    backgroundColor: "#222",
  },
});
