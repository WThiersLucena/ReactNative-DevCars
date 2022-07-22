import React, { useState } from "react";

import { StyleSheet, Text, View,
         TouchableOpacity,Modal,Image,
        Pressable,ScrollView,
 } from "react-native";



 
export function CarroseisMarcas() {
    return(
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