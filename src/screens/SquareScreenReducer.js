import { StyleSheet, View } from 'react-native'
import React, { useReducer } from 'react'
import ColorCounter from '../components/ColorCounter'

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'change_red' || 'change_green' || 'change_blue'}

    switch (action.type){
      case 'change_red':
        // never going to do: state.red = state.red-15
        return state.red + action.payload > 255 || state.red + action.payload < 0 ?
          state : {...state, red: state.red + action.payload}
      case 'change_green':
        state.green + action.payload > 255 || state.green + action.payload < 0 ?
          state : {...state, green: state.green + action.payload}
      case 'change_blue':
        state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
          state : {...state, blue: state.blue + action.payload}
      default:
        return state
    }
}

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer( reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state
  
  const COLOR_INCREMENT = 15

  return (
    <View>
      <ColorCounter 
        onIncrease={()=> dispatch({ type: 'red', payload: COLOR_INCREMENT})}
        onDecrease={()=> dispatch({ type: 'red', payload: -1*COLOR_INCREMENT})}
        color="Red" />
      <ColorCounter
        onIncrease={()=> dispatch({ type: 'green', payload: COLOR_INCREMENT})}
        onDecrease={()=> dispatch({ type: 'green', payload: -1*COLOR_INCREMENT})}
        color="Green" />
      <ColorCounter
        onIncrease={()=> dispatch({ type: 'blue', payload: COLOR_INCREMENT})}
        onDecrease={()=> dispatch({ type: 'blue', payload: -1*COLOR_INCREMENT})}
        color="Blue" />
      
      <View 
        style={{
          height: 150, 
          width: 150, 
          backgroundColor:`rgb(${red}, ${green}, ${blue})`
        }}
      />

    </View>
  )
}

export default SquareScreenReducer

const styles = StyleSheet.create({})