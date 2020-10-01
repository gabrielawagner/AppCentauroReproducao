import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/components/Login';
import Categoria from './src/components/Categoria';
import { View } from 'react-native';

export default function App() {
  return (   
    <View>
    <StatusBar style="light" backgroundColor= '#700906'/>  
    <Login/>
    {/* <Categoria/>     */}
    </View>
  
  )
}


