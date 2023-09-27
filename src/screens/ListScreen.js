import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {
  const friends= [
    { name: 'Friend 1', age: 20},
    { name: 'Friend 2', age: 21},
    { name: 'Friend 3', age: 25},
    { name: 'Friend 4', age: 32},
    { name: 'Friend 5', age: 23},
    { name: 'Friend 6', age: 24},
    { name: 'Friend 7', age: 20}
  ]
  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
      }} />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  textStyle:{
    marginVertical:20
  }
})