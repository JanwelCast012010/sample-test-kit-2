import * as React from "react";
import {View,StyleSheet, Text} from "react-native";

export default function Footer(){
    return (
        <View style={{
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingBottom: 10,
          }}>
            <Text style={{
              fontSize: 14,
              color: '#567DFA',
              marginTop: 20,
            }}>
              Don't have an account? Sign up!
            </Text>
          </View>
       
    )
    
    }