import React, { useState } from 'react';
import {Platform, StyleSheet, View,Text } from 'react-native';

export default function Head(){
    return(
        <View style= {styles.Head}>
        <Text style={styles.title}>My Todo's</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    Head: {
        backgroundColor:'#E13259',
        paddingHorizontal:92,
        marginTop:200,
        justifyContent: 'center',
    },
    title:{
        fontSize: 40,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: 10,
        color: '#ffffff'
    }
})