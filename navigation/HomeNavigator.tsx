import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList} from '../types';
import TabOneScreen from "../screens/TabOneScreen";
import TodoList from "../screens/TodoList";
import { HomeScreen, LandingScreen } from "../screens/Home";
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import DefaultColor from "../constants/Colors";
///constants/Colors.ts
const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Landing"
    screenOptions= {({navigation})=> ({
      title:"sample",
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
       component={LandingScreen} 
    
       />
    
    </Stack.Navigator>
  );
}