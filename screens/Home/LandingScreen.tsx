import React, { useState } from 'react';
import { FlatList, StyleSheet, View,Text,Alert , TouchableWithoutFeedback,Keyboard} from 'react-native';
import Head from ".././../components/Head";
import TodoItem from ".././../components/TodoItem";
import AddTodo from '../../components/AddTodo';
import SandBox from '../../components/SandBox';

export default function LandingScreen() {
  const [todos,setTodos]= useState([
    {text: 'codings', key:'1'},
    {text: 'edit', key:'2'},
    {text: 'tired', key:'3'}

  ]);

  const pressHandler = (key:any) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text:any) => {

    if(text.length > 3) {
    setTodos((prevTodos) => {
    return[
    {text: text,key: Math.random().toString()},
    ...prevTodos
    ];
  });

}else {
  Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
    {text:'Ok', onPress:() => console.log('alert closed')}
  ]);
}

 }

  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={() =>{
       Keyboard.dismiss();
       console.log('dismissed keyboard')
     }}>
     <View style={styles.container}>
    <Head/>
     <View style={styles.content}>
       < AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
        <FlatList
        data={todos}
      renderItem={({item}) => (
  <TodoItem item={item} pressHandler={pressHandler} />

        )}
        />
        </View>
       </View>

     </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {

  },
  list: {
    marginTop:1,
  }
  
})
