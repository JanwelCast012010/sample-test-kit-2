import * as React from "react";
//import { StyleSheet } from 'react-native';
import { View, Text,TextInput, StyleSheet} from "react-native";
import Header from "../components/Login/Header";
import Formlogin from "../components/Login/Formlogin";
import Footer from "../components/Login/Footer";
import EditScreenInfo from '../components/EditScreenInfo';
//import {useHistory} from "react-router-dom";
//import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  //Import {useHistory} from "react-router-dom";
  return (
    <View
    style={styles.container}
    >
    <Header />
    <Formlogin />
    <Footer />


   
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    //background
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
textStyle:{
textAlign: "center",
fontFamily: 'poppins-bold',
fontSize: 20,
color: '#fb6f92',
},
  input:{
  height: 40,
  width: '100%',
  marginBottom: 30,
  borderWidth: 2,
  borderRadius: 20,
  justifyContent: "center",
  borderColor:'#00b4d8', 
  },
});
