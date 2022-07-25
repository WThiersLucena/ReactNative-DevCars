import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Modal,Image,
     Pressable,ScrollView } from "react-native";


export function Destaques() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <View style={styles.container}>
      
       {/* Aqui deve ser inserido o card */}
                
       <View>
            <Text style={styles.destaque}>Destaques </Text>
        </View>
        
      
     
         {/* INICIO DOS CARDS DESTAQUES  { INCIO LINHA 19 ATE LINHA 201 } */}
      <ScrollView
            style={styles.cards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
           
            {/* CARD 1 */}   
            <View style={styles.areaButton2}>        
            <TouchableOpacity style={styles.actionButton}
            onPress={() => setModalActive(true)}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/Ferarri-monza.jpg")}
                />
                
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Ferrari- Monza</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>

            </TouchableOpacity>
            </View> 
            {/* CARD 2 */}
            <View style={styles.areaButton2}>            
            
            <TouchableOpacity style={styles.actionButton}
            onPress={() => setModalActive(true)}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/Nissan_GT-R.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Nissan GTR</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>
            {/* CARD 3*/}
            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}
            onPress={() => setModalActive(true)}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/LamborghiniUrus.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Lamborguhini Urus</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
              
            </TouchableOpacity>
              </View>
            {/* CARD 4 */}
            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}
            onPress={() => setModalActive(true)}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/BentleyContinentalGT3.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Bentley GT3</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>

            {/* CARD 5 */}
            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}
            onPress={() => setModalActive(true)}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/AstonMartinDB11.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Aston Martin DB 11</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>

            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/BentleyMullinerBacalar.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Bentley Mulliner Bacalar</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>

            {/* CARD 6 */}
            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/BugattiChiron.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}>Bugatti Chiron</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>

            {/* CARD 7 */}
            <View style={styles.areaButton2}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.areaButton}>
                <Image
                  style={{
                    width: '98%',
                    height: '98%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8,
                  }}
                  source={require("../../assets/images/Estoque/AresS1.jpg")}
                />
              </View>
              <View style={styles.itensMarcaValor}>
              <Text style={styles.marcaCard}> Ares S1</Text>
              <Text style={styles.valorCard} >R$ 19.000.000,00</Text>
              <Text style={styles.valorCard} >Ver Detalhes</Text>
              </View>
            </TouchableOpacity>
            </View>
      </ScrollView>
          {/* FIM DOS CARDS  DA AREA DESTAQUE */}
          {/* INICIO DOS MODAIS { INCIO LINHA 203 ATE 325 } */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}
        
      >
        <View style={styles.outerView}>
        <Pressable onPress={()=> setModalActive(false)}>
            <Text style={{marginLeft:'85%',marginBottom:5,}}> [ X ]</Text>
        </Pressable>
          <View style={styles.modalView}>
          <Text ></Text>
          
          
          {/* FLEX DIRECTION "ROW" */}
          
          <View style={{flexDirection:"row"}}> 
            
            <View style={{flex:1,}}>
            <Text style={{margin:5,textAlign:"center",color:"#fff", fontWeight:"bold",}}>FERRARI MONZA SP2</Text>
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <Image
              style={{
                width: 183,
                height: 200,
                borderRadius:8,
                marginLeft:5,
                marginRight:3,
              }}
              source={require("../../assets/images/Estoque/Ferarri-monza.jpg")}
            />    
            <Image
              style={{
                width: 183,
                height: 200,
                borderRadius:8,
                marginLeft:5,
                marginRight:3,
              }}
              source={require("../../assets/images/Estoque/Ferarri-monza.jpg")}
            />    
            <Image
              style={{
                width: 183,
                height: 200,
                borderRadius:8,
                marginLeft:5,
                marginRight:3,
              }}
              source={require("../../assets/images/Estoque/Ferarri-monza.jpg")}
            /> 
            <Image
              style={{
                width: 183,
                height: 200,
                borderRadius:8,
                marginLeft:5,
                marginRight:3,
              }}
              source={require("../../assets/images/Estoque/Ferarri-monza.jpg")}
            />       
            
                
            </ScrollView>
                
            </View>
            
            
            <View style={{flex:1,marginLeft:6,}}>
            <Text style={{margin:5,color:'#ffff',textAlign:"center",fontWeight:"bold"}}>Ficha Técnica</Text>
                <Text style={styles.fichaTecnica}>
                    Modelo :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Cor :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Fabricação :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Motor :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Potência :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Câmbio :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Combustível :
                </Text>
                <Text style={styles.fichaTecnica}>
                    Valor :
                </Text>
            </View>
            
          </View>
            {/* FLEX DIRECTION "ROW" */}

         
            <View>
                <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,margin:5,color:"#fff"}}>
                    Descrição dos Veiculo 
                </Text>
                <Text style={styles.descricaoVeiculo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                     repudiandae ab est fugiat saepe iste, repellendus praesentium excepturi
                      quam nihil aut suscipit aliquam, reprehenderit deleniti ut error id! Rerum, 
                      incidunt!
                </Text>
            </View>
            
          </View>
          
        <Pressable onPress={()=> setModalActive(false)}>
            <Text> Agendar Visita</Text>
        </Pressable>
        </View>
      </Modal>
       

     
    </View>
  );
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
    // backgroundColor: "#daa520",
    height: 360,
    width: 360,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  areaButton2:{
    backgroundColor: "#ecedf1",
    height: 530,
    width: 380,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  itensMarcaValor:{
      fontWeight:"bold",
      fontSize:19,
      margin: 2,
      backgroundColor: "#ebece29f",
      height: 160,
      width: 360,
      borderRadius: 20,
      textAlign: "center",
  },
  marcaCard:{
    fontWeight:"bold",
    fontSize:19,
    backgroundColor: "#d8d8d4ec",
    height: 30,
    width: 350,
    textAlign: "center",
    marginTop:8,
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
