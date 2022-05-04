import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View,Text,Alert , TouchableWithoutFeedback,Keyboard,TouchableOpacity, ScrollView} from 'react-native';
import Head from ".././../components/Head";
import AddTodo from '../../components/AddTodo';
import SandBox from '../../components/SandBox';
import {Todo} from '../../Models/Todo';
import { getData, storeData } from '../../Database/StoreData';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import {HomeParamList} from '../../types';
import { RouteProp,useRoute } from "@react-navigation/native";

type Iroute = {
  "params": HomeParamList['Landing'];
}
export default function LandingScreen() {
  const [todos, setTodos] = useState<Array<Todo> | null>(null);


  const route = useRoute<RouteProp<Iroute, "params">>();
  const todo = route.params.todo;
  const index = route.params.index
  
  const retrieveData =async () => {
      const todoList = await getData('todoList');
      if (todoList) {
          const json = JSON.parse(todoList);
          setTodos(json)
      }
      // await removeData('todoList');
  }
 
  const deleteTodo = async () => {
  
    const todoList = await getData('todoList');
    if (todoList) {
        const json = JSON.parse(todoList);
        
        json.splice(index, 1)
        storeData('todoList', JSON.stringify([...json]));
    }
    }

  useFocusEffect(
    useCallback(() => {
        retrieveData();
    }, [])
);
 

//   // const submitHandler = (text:any) => {

//   //   if(text.length > 3) {
//   //   setTodos((prevTodos) => {
//   //   return[
//   //   {text: text,key: Math.random().toString()},
//   //   ...prevTodos
//   //   ];
//   // });

// }else {
//   Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
//     {text:'Ok', onPress:() => console.log('alert closed')}
//   ]);
// }

//  }

  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={() =>{
       Keyboard.dismiss();
       console.log('dismissed keyboard')
     }}>
     <View style={styles.container}>
    <Head/>
     <View style={styles.content}>
       < AddTodo/>
      <View >
      <ScrollView>
      <View>
        {todos && todos.map((todo: Todo, index: number) => (
       <TouchableOpacity onPress={() => deleteTodo()}>
           <View style ={styles.item}>
          
           <Text style={styles.itemText}>{todo.Title}</Text>
           </View>
           { <MaterialIcons style= {styles.icon} 
           name ='delete' 
           size={30} 
           color={'#E13257'}  /> }
           </TouchableOpacity>
      ))}
      </View>
   </ScrollView>
    

       
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
  },
    item: {
        paddingTop:10,
        marginTop: 16,
        borderRadius:10,
        flexDirection:'row',
        paddingHorizontal:16,
        backgroundColor: '#bbb',
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
        marginTop: -33,

    }
});

