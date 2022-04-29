import * as React from "react";
import {View,Image,StyleSheet, Text} from "react-native";

export default function Header(){
return (
    <View style={{
        flex: 1,
        marginTop: 50,
      }}>
         <Image
      style={{
      height: '90%',
      width: '100%',
      resizeMode: 'center'
      
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/906/906360.png'}}
    
    
  />
  r
      <Text style={{
        fontSize: 80,
        fontFamily: 'poppins-bold',
        textAlign: "center",
        marginTop: -50,
        marginBottom: -100,
        marginLeft: -160,
        color: '#E13259'
      }}>A
      </Text>
      <Text style={{
        fontSize: 50,
        fontFamily: 'poppins-thin',
        textAlign: "center", 
        marginBottom: 50,
        marginLeft: 60,
        color: '#E13257'
      }}>GENDA
      </Text>

      </View>
     
)

}