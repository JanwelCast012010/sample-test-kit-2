import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import {Button} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {RootStackParamList} from '../../types';




export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
   <Button
      title ={"Add New Todo"}
      onPress={ () => navigation.navigate ('Todo')}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
