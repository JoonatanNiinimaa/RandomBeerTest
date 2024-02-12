import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,View,Text } from 'react-native';

const URL = 'https://random-data-api.com/api/v2/beers'

export default function App() {

const [brand, setBrand] = useState('')
const [name, setName] = useState('')
const [style, setStyle] = useState('')

useEffect(() => {
  fetch(URL)
  .then(response => response.json())
  .then((json) => {
    setBrand(json.brand)
    setName(json.name)
    setStyle(json.style)
  }).catch((error) => {
    console.log(error)
  })
}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Random beer fact</Text>
      <Text>{brand}</Text>
      <Text>{name}</Text>
      <Text>{style}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems:'center',
    justifyContent: 'center',
    },
    fields:{
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30,
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 20,
    }
});
