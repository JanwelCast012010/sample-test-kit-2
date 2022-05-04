import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import TabOneScreen from "../screens/TabOneScreen";
import TodoList from "../screens/TodoList";
import { HomeScreen } from "../screens/Home";
import LandingScreen from "../screens/Home/LandingScreen";
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import DefaultColor from "../constants/Colors";
import { color } from "react-native-reanimated";
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
       component={LandingScreen} 
       />
    
    </Stack.Navigator>
  );
}