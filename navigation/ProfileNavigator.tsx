import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileParamList} from '../types';
import TabOneScreen from "../screens/TabOneScreen";
import { HomeScreen } from "../screens/Home";
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import DefaultColor from "../constants/Colors";
import { ProfileScreen } from "../screens/Profile";
///constants/Colors.ts
const Stack = createStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="ProfileList"
    screenOptions= {({navigation})=> ({
      title:"Profile",
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
       name="ProfileList"
       component={ProfileScreen} 
    
       />
    
    </Stack.Navigator>
  );
}