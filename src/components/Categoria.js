import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Categoria() {
  return (
    <>
      <View style={{ backgroundColor: "#be1033" , flexDirection: "row", alignItems: "center", height:80}}>
      <Icon
          style={styles.headerIcons}
          name="bars"
          size={25}
          color="white"
        />
        <Text
          style={{
            fontSize: 18,
            marginTop:25,
            color: "white",
            justifyContent: "center",
            fontWeight: 'bold',
            marginLeft:-75
            
          }}
        >
          
          {" "}
          Categorias{" "}
        </Text>
        
        <View style = {{marginRight:-140, marginLeft:80}}>
        <Icon
          style={styles.headerIcons}
          name="search"
          size={20}
          color="white"
        />
        </View>

        <View style={{flexDirection: 'row',  marginHorizontal: 50}}> 
        <Icon
          style={styles.headerIcons}
          name="shopping-cart"
          size={25}
          color="white"
        />
        </View>


      </View>
<ScrollView>
      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center" }}
          source={require("../../assets/Esportes.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            ESPORTES{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11 }}>
            {" "}
            Tudo para o seu treino
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 60, alignSelf: "center", marginLeft:15 }}
          source={require("../../assets/Marcas.png")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
              
            }}
          >
            {" "}
            MARCAS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:-150}}>
            {" "}
            As maiores do mercado
          </Text>
        </View>

        <Icon
          style={{ alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
          marginLeft: 80,}}
          
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{
            height: 60,
            width: 80,
            alignSelf: "center",
            resizeMode: "contain",
            marginTop:8.2
          }}
          source={require("../../assets/Homens2.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            HOMENS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:20 }}>
            {" "}
            Tudo para homens
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      
      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
          
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain', marginTop:8.3 }}
          source={require("../../assets/Mulheres.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            MULHERES{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:18 }}>
            {" "}
            Tudo para mulheres
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain', marginTop:8.2 }}
          source={require("../../assets/Crianças.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            CRIANÇAS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:55 }}>
            {" "}
          Até 13 anos
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain' }}
          source={require("../../assets/Calcados.png")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            CALÇADOS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11 }}>
            {" "}
          Para todas as ocasiões
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain' }}
          source={require("../../assets/Roupas.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            ROUPAS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:10 }}>
            {" "}
          Para todos os gostos
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      


      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain' }}
          source={require("../../assets/Acessorios.png")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            ACESSÓRIOS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:5 }}>
            {" "}
          Complemente o visual
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain' }}
          source={require("../../assets/Halter.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            EQUIPAMENTOS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11, marginRight:-20 }}>
            {" "}
          Seu esporte por completo
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>
      
      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ height: 60, width: 80, alignSelf: "center", resizeMode: 'contain' }}
          source={require("../../assets/Suplementos2.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            SUPLEMENTOS{" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11 }}>
            {" "}
          Impulso para a força
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      

      <View
        style={{
          borderWidth: 0.9,
          borderColor: "#cccaca",
          width: 330,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{
            height: 60,
            width: 80,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={require("../../assets/Suplementos2.jpg")}
        />

        <View styles={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginVertical: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            HOMENS {" "}
          </Text>
          <Text style={{ color: "#a8a4a3", marginVertical: -15, fontSize: 11 }}>
            {" "}
            Tudo para homens
          </Text>
        </View>

        <Icon
          style={styles.password}
          name="chevron-right"
          size={30}
          color="#cccaca"
        />
      </View>

      <View style= {{ height:10}}/>


      


      
      </ScrollView>






    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-end",
    padding: "30",
  },
  password: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginLeft: 40,
  },

  headerIcons: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
    marginLeft: 20,
    marginRight:100,    
    marginTop: 50
  },
});
