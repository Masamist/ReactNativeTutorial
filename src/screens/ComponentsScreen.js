import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ComponentsScreen = () => {
  const yourName = 'Masami'
  return (
  <View>
    <Image source={require('../../assets/beach.jpg')} />
    <Text style={styles.textStyle}>Getting started with react native!</Text>
    <Text style={styles.name}>My name is {yourName}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  name: {
    fontSize:20
  }
});

export default ComponentsScreen

