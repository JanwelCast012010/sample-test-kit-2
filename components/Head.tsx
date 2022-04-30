import React, { useState } from 'react';
import {Platform, StyleSheet, View,Text } from 'react-native';

export default function Head(){
    return(
        <View style= {styles.Head}>
        <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    Head: {
        backgroundColor:'#ff00cc',
        paddingHorizontal:96,

    },
    title:{
        fontSize: 40,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: 60,
        color: '#ffffff'
    }
})