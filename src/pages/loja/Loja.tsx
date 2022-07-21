import React, { useState } from "react";

import {View,Text,StyleSheet,TouchableOpacity,
  Image, Dimensions,ScrollView,TextInput,
  FlatList,Modal,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";

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
          <Text style={styles.headerEfooter}>Area reservada ao Header</Text>
          <View style={styles.container}>
          {/* 1º Modelo de Slide  */}
          <AppIntroSlider renderItem={renderSlides} data={slides} />
          </View>
          {/* LOGO DE TODAS AS MARCAS ABAIXO   [ inicio linha 94 ate 257]*/}
          <ScrollView
            style={styles.logosMarca}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {/* LOGO 1 */}            
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/ferrari-logo.png")}
                />
              </View>
              <Text style={styles.conteudo}>Ferrari</Text>
            </TouchableOpacity>
            {/* LOGO 2 */}
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/lamborghini.png")}
                />
              </View>

              <Text style={styles.conteudo}>Lamborghini</Text>
            </TouchableOpacity>
            {/* LOGO 3*/}
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/bmw.png")}
                />
              </View>

              <Text style={styles.conteudo}>Bmw</Text>
            </TouchableOpacity>

            {/* LOGO 4 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/jaguar.png")}
                />
              </View>

              <Text style={styles.conteudo}>Jaguar</Text>
            </TouchableOpacity>

            {/* LOGO 5 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/opel.png")}
                />
              </View>

              <Text style={styles.conteudo}>Opel</Text>
            </TouchableOpacity>

            {/* LOGO 6 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/audi.png")}
                />
              </View>

              <Text style={styles.conteudo}>Audi</Text>
            </TouchableOpacity>

            {/* LOGO 7 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/rolls-royce.png")}
                />
              </View>

              <Text style={styles.conteudo}>Rolls-Royce</Text>
            </TouchableOpacity>

            {/* LOGO 8 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/aston-martin.png")}
                />
              </View>

              <Text style={styles.conteudo}>Aston-Martin</Text>
            </TouchableOpacity>

            {/* LOGO 9 */}

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../assets/images/Home/subaru.png")}
                />
              </View>

              <Text style={styles.conteudo}>Subaru</Text>
            </TouchableOpacity>

            {/* LOGO 10 */}
          </ScrollView>
          {/* FIM DAS LOGO DE TODAS AS MARCAS  */}

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
        <View>
          <Text style={styles.encontreSeuCarro}>
            Are de Destaques os Princicais veiculos
          </Text>
          <View>

          </View>
          <TouchableOpacity activeOpacity={0.3}>
            <Image
              style={{
                width: 250,
                height: 250,
                justifyContent: "center",
                alignItems: "center",
              }}
              source={require("../../assets/images/Estoque/Nissan_GT-R.jpg")}
            />
          </TouchableOpacity>
        </View>
          {/* INICIO DA AREA DE DESTAQUE [ inicio linha 294 ate 310]*/}
          
          {/* INICIO DA AREA DE NOTICIAS E EVENDOS [inicio da linha 313 ate ....] */}
        <View>
          <Text style={styles.conteudo}>
            SSC Tuatara apresenta versao com até 2.230 cv
          </Text>
          
        </View>
        {/* FIM DA AREA DE NOTICIAS E EVENDOS [inicio da linha 313 ate ....] */}

                
         {/*AREA RESERVADA AO FOOTER  */}
        <View>
          <Text style={styles.headerEfooter}>Area reservada ao Footer</Text>
        </View>

        
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
  headerEfooter:{
    color: "#daa520",
    marginTop:15,
    marginBottom: 10,
    textAlign: "center",
  },
});
