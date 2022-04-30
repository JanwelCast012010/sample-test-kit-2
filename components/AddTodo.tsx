import React, {useState} from 'react';
import {StyleSheet,Text,TextInput, Button, View } from 'react-native';

export default function AddTodo ({submitHandler}:{submitHandler:any}) {
    const [text, setText] = useState('');

    const changeHandler = (val:any) => {
        setText(val);
    } 
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo'  color='#E13257'/> 
        </View>
    )
}
const styles = StyleSheet.create({
input:{
    marginBottom:20,
    paddingHorizontal:2,
    paddingVertical:1,
    borderBottomWidth:1,
    borderBottomColor:'#E13257',
    marginTop:50,
},



});