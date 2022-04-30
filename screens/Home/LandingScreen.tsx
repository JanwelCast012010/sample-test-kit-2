import React, { useState } from 'react';
import { FlatList, StyleSheet, View,Text, } from 'react-native';
import Head from ".././../components/Head";
import TodoItem from ".././../components/TodoItem";

export default function LandingScreen() {
  const [todos,setTodos]= useState([
    {text: 'buy coffee', key:'1'},
    {text: 'create an app', key:'2'},
    {text: 'play on the switch', key:'3'}

  ]);

  const pressHandler = (key:any) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  return (
    <View style={styles.container}>
   <Head/>
    <View style={styles.content}>
      {  } 
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding:40,
  },
  list: {
    marginTop:80,
  }
  
})
