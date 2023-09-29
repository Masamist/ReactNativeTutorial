import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
  const [name, setName] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        // for iOS, these will protect to autocorrect passwors and emails
        autoCapitalize="none"
        actoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        // for iOS, these will protect to autocorrect passwors and emails
        autoCapitalize="none"
        actoCorrect={false}
        value={Password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {Password.length < 4 ? <Text>Password must be 4 charactoers</Text>: null}
      
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    fontSize: 20,
    borderColor:'black',
    borderWidth:1,
    borderRadius:5
  }
})