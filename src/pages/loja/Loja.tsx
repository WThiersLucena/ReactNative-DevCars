import React, { useState } from "react";

import {View,Text,StyleSheet,TouchableOpacity,
  Image, Dimensions,ScrollView,TextInput,
  FlatList,Modal,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import { Destaques } from '../../components/Destaques/DestaquesCard';
import { CarroseisMarcas } from '../../components/Carrosseis/CarrosselMarcas';
import  { Footer }  from '../../components/Footer/Footer';
import {Header} from '../../components/Header/Header';
import {CarroselApresentação} from '../../components/Carrosseis/CarroselApresentação';

  {/* FOTOS E DADOS DO 1º SLIDE */}
const slides = [
  {
    key: "1",
    title: "Nissan_GT-R ",
    Text: "01 unidade disponivel com 572 cv ",
    image: require("../../assets/images/Estoque/Nissan_GT-R.jpg"),
  },
  {
    key: "2",
    title: "ARES Modena - S1 Speedster -  ",
    Text: "Unico ARES Modena disponivel no Brasil",
    image: require("../../assets/images/Estoque/AresS1.jpg"),
  },
  {
    key: "3",
    title: "Bugatti Chiron ",
    Text: "1.500 cv de potência - O supercarro foi feito sob medida ",
    image: require("../../assets/images/Estoque/BugattiChiron.jpg"),
  },
];

export function Loja() {
  const [slide1, setSlide1] = useState(true);
  const [pesquisaMarca, setPesquisaMarca] = useState("Marca");
  const [pesquisaModelo, setPesquisaModelo] = useState("Modelo");
  const [pesquisaAno, setPesquisaAno] = useState("Ano");
  

  function renderSlides({ item }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          margin:1,
        }}
      >
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
           //height: "75%",
           //width: "100%",
            width: 400,
            height: 250,
          }}
        />
        <View>
          <Text
            style={{
              backgroundColor: "#daa520",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              backgroundColor: "#daa520",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.Text}
          </Text>
        </View>
      </View>
    );
  }

  return (
  
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header/>
          <View style={styles.container}>
          {/* 1º Modelo de Slide  */}

          <CarroselApresentação/>
          {/* <AppIntroSlider renderItem={renderSlides} data={slides} /> */}

          {/* Inicio do Carrossel de Marcas */}
          </View>
            <CarroseisMarcas/>
         </View>

         {/* INICIO DO CAMPO DE BUSCA [inicio linha 261 ate 291] */}
        <View>
          <Text style={styles.encontreSeuCarro}>Encontro seu Carro :</Text>
          <TextInput
            style={styles.buscador}
            value={pesquisaMarca}
          />
          <TextInput
            style={styles.buscador}
            value={pesquisaModelo}
          />
          <TextInput
            style={styles.buscador}
            value={pesquisaAno}
          />
        </View>
         {/* FIM  DO CAMPO DE BUSCA [inicio linha 261 ate 291] */}


         {/* INICIO DA AREA DE DESTAQUE [ inicio linha 294 ate 310]*/}
        
             <Destaques/>

          {/* INICIO DA AREA DE DESTAQUE [ inicio linha 294 ate 310]*/}
          
          {/* INICIO DA AREA DE NOTICIAS E EVENDOS [inicio da linha 313 ate ....] */}
        <View>
          <Text style={styles.conteudo}>
            SSC Tuatara apresenta versao com até 2.230 cv
          </Text>
          
        </View>
        {/* FIM DA AREA DE NOTICIAS E EVENDOS [inicio da linha 313 ate ....] */}

                
         {/*AREA RESERVADA AO FOOTER  */}
        
        <Footer/>
        
        </ScrollView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181717",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    borderRadius: 2,
  },
  conteudo: {
    color: "#dad5cb",    
  },
  encontreSeuCarro:{
    margin: 15,
    color: '#fff',
    justifyContent: "center",
    textAlign: "center",
    fontWeight:"bold",
  },
  buscador:{
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    color: "#fff",
    margin: 5,
    paddingStart: 15,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 10,
  },
  areaButton: {
    backgroundColor: "#4d4646",
    height: 60,
    width: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logosMarca: {
    maxHeight: 150,
    paddingStart: 5,
    marginTop: 18,
    margin: 5,
    //   marginBottom: 14,
    paddingEnd: 14,
  },
  areaDasLogo: {
    backgroundColor: "#fff",
  },
});
