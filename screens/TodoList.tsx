import * as React from "react";
import { View, Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";


export default function TodoList() {
  
  return (
    <View
    style={styles.container}
    ></View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //background
      backgroundColor: '#000000',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
  });
