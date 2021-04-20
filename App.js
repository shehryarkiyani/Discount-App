import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <TextInput style={styles.TextInputStyle} placeholder="Enter Original Price"/>
      <TextInput style={styles.TextInputStyle} placeholder="Enter Discount Percentage"/>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer:{
    flexDirection:'column'
  },
  TextInputStyle:{
    borderBottomColor:'#ff1493',
    borderWidth:1,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    width:'100%'
  },
});
