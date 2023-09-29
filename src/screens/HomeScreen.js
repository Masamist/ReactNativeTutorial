import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('SquareReducer')}
        title="Go to Square Reducer Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Screen"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Screen"
        style={styles.button}
      />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button:{
    fontSize: 30,
    padding: 30,
    margin: 50
  }
});
