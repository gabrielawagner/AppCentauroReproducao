import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  return (   
    <SafeAreaView style={styles.container}>
     <View> 
      <Text style={{marginTop: 35, color: 'gray'}} >Sair</Text>
    </View> 
    <Image style = {{ height:40, width:250, alignSelf: "center", marginTop:55}} source={require('../../assets/centauroLogo.png')}/>  
    
    <TouchableOpacity
        style={{
          marginTop: 25,
          backgroundColor: '#0858c9',
          height: 48,
          width:320,          
          padding: 20,
          alignSelf: "center",
        }}>       
        <View> 
        <Text style={{color: 'white', fontSize: 18, alignSelf: 'center', marginVertical: -10 }}>
          Entrar com o facebook
        </Text>
        <View>
        <Icon name="facebook-f" size={20} color="white" style={{marginTop: -12}}/>
        </View>
        </View>
      </TouchableOpacity>      
    
      <TouchableOpacity
        style={{
          marginTop: 8,
          backgroundColor: '#5e92db',
          height: 48,
          width:320,          
          padding: 20,
          alignSelf: "center"
        }}>
        <View> 
        <Text style={{color: 'white', fontSize: 18, alignSelf: 'center', marginVertical: -10 }}>
          Entrar com o google
        </Text>
        <View>
        <Icon name="google" size={20} color="white" style={{marginTop: -12}}/>
        </View>
        </View>      
      </TouchableOpacity>
      
      <Text style={{color: 'gray', fontSize: 18, alignSelf: 'center', marginTop: 18}}> Ou </Text>
        
      

    
<View style={{alignContent: "center", alignSelf: "center", marginTop: 10}}>

<View
    style={styles.InputText}>
      <View style={{justifyContent: 'space-evenly', marginHorizontal: 8, marginTop:-3}}>
      <Icon style={styles.password} name="user" size={15} color="#a8a4a3" />
      </View>
      <TextInput
         style={{ color:"gray", height: 40, flex:1, justifyContent: 'center', textAlignVertical: 'top', marginLeft:5}}
         placeholder={'E-mail, CPF ou CNPJ'}
        />
        
    </View>   
    
    <View
    style={styles.InputText}>
      <View style={{justifyContent: 'space-evenly', marginHorizontal: 8, marginTop:-3}}>
      <Icon style={styles.password} name="key" size={15} color="#a8a4a3" />
      </View>
      <TextInput
         style={{ color:"gray", height: 40, flex:1, justifyContent: 'center', textAlignVertical: 'top'}}
         placeholder={'Senha'}
        />
        <View style= {{flexDirection: "row"}}> 
        <Icon style={styles.password} name="eye" size={15} color="#a8a4a3" />
        </View>
    </View>    
   
    <Text style={{color: 'gray', fontSize: 13, marginTop: 5, alignSelf: 'flex-end'}}> Esqueci minha senha </Text>
   
    </View>
    <TouchableOpacity
        style={{
          marginTop: 160,
          backgroundColor: '#be1033',
          height: 45,
          width:320,          
          padding: 20,
          alignSelf: "center"
        }}>
        <Text style={{color: 'white', fontSize: 18, alignSelf: 'center', marginVertical: -10}}>
          ENTRAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          height: 45,
          width:320,          
          padding: 20,
          borderWidth: 0.9,
          borderColor: '#c9c3c1',
          alignSelf: "center"
        }}>
        <Text style={{color: '#454242', fontSize: 15, alignSelf: 'center', marginVertical: -10}}>
          QUERO CRIAR UMA CONTA
        </Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'flex-end',
    padding: 30,
    
  },
  InputText: {
      padding: 10,
      height: 45,
      width:320,
      borderColor: '#c9c3c1',
      borderWidth: 0.9,
      borderRadius:5,
      alignSelf: "center",
      justifyContent: 'center',
      marginTop:10,
      flexDirection: 'row'

    },
  password:{
      alignItems: 'center',
      justifyContent: 'center',
    }
});
