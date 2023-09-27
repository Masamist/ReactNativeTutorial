import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {
  const [ counter, setCounter ] = useState(0)


  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button title="Increase" onPress={() => {
        setCounter(counter + 1)
      }}/>
      <Button title="Decrease" onPress={() => {
        setCounter(counter-1)
      }}/>

    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})