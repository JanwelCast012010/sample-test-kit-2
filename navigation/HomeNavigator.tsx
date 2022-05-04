import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import TabOneScreen from "../screens/TabOneScreen";
import { HomeScreen } from "../screens/Home";
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import DefaultColor from "../constants/Colors";
import { color } from "react-native-reanimated";
import TodoScreen from "../screens/Home/TodoScreen";
///constants/Colors.ts
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Landing"
    screenOptions= {({navigation})=> ({
      title:"Agenda",
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 5
          }}
          onPress={() => {
          navigation.toggleDrawer();
          }}
      >
            <Ionicons
              name={"menu"}
              size={24}
              Color={DefaultColor.light}
            />
          </TouchableOpacity>
      )
    
        })}
    >
      <Stack.Screen 
      name="Landing"
       component={HomeScreen} 
       />

      <Stack.Screen
       name="TodoList"
       component={TodoScreen} 
       />
    
    </Stack.Navigator>
  );
}