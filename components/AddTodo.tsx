import React, {useState} from 'react';
import {StyleSheet,Text,TextInput, Button, View } from 'react-native';
import { getData, storeData } from '../Database/StoreData';
import {Todo} from '../Models/Todo';

export default function AddTodo () {
    const [text, setText] = useState('');

    const [Title, setTitle] = useState<string>('');

    const submit = async () => {
        const data = {
            Title: Title,
          
        }

        const todoList = await getData('todoList');
        if (todoList) {
            const json = JSON.parse(todoList);
            const mergeTodoList = [data, ...json];
            storeData('todoList', JSON.stringify(mergeTodoList));
            console.log(json)
        }else {
            storeData('todoList', JSON.stringify([data]));
        }
       
    }

    // const changeHandler = (val:any) => {
    //     setText(val);
    // } 
    return(
        <View>
            <TextInput
            value = {Title}
            style={styles.input}
            onChangeText= {Title => setTitle(Title)} 
            placeholder='New todo...'
            
            />
            <Button onPress={() => submit()} title='Add Todo'  color='#E13257'/> 
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