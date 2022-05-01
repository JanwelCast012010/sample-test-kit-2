import React from 'react';
import {StyleSheet,Text,TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item,pressHandler}: {item:any, pressHandler:any }) {
     return(
         <TouchableOpacity onPress = {() => pressHandler(item.key)}>
             <View style= {styles.item}>
              
             <Text style={styles.itemText}>{item.text}</Text>
             </View>
             <MaterialIcons style= {styles.edit} 
             name ='edit' 
             size={30} 
             color={'#E13257'}  />
             
             <MaterialIcons style= {styles.icon} 
             name ='delete' 
             size={30} 
             color={'#E13257'}  />
             </TouchableOpacity>
     )
}
const styles = StyleSheet.create({
    item: {
        paddingTop:10,
        marginTop: 16,
        borderRadius:10,
        flexDirection:'row',
        paddingHorizontal:16,
        backgroundColor: '#e9ecef',
        paddingBottom: 16,
        marginBottom: -5,
    },
    itemText:{
        marginRight:20,
        fontSize:18,
        fontFamily: 'poppins-regular',
    },
    icon:{
        marginLeft: 250,
        marginTop: -30,

    },
    edit:{
        marginLeft: 220,
        marginTop: -34,

    }
    
});