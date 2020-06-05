import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = ({ style }) => {
  const [texto, setTexto] = useState("Hola Alexs")
  //funcion
  const actualizaTexto = () => {
    setTexto("Adios Alexs")
  }

  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.texto1} />
      <Texto style={styles.texto2} />
      <Texto style={styles.texto3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//este representa todo ya que es el que envuelve a todo
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 24,
    height: 100,
    width: 100
  },
  texto1: {//1+2+3=6
    flex: 1,//un sexto
    backgroundColor: "red",
  },
  texto2: {
    flex: 2,//un tercio
    backgroundColor: "blue"
  },
  texto3: {
    flex: 3,//tiene la mitad
    backgroundColor: "green"
  }

});
