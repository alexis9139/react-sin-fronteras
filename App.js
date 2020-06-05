import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Dimensions } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [submitted, setSubmit] = useState("");



  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>
        <Text>Texto escrito:{text}</Text>
        <Text>Texto boton:{submitted}</Text>

        <TextInput style={styles.input}
          placeholder="Ingrese s)u texto..."
          onChangeText={t => setText(t)}
          defaultValue={text}
        />
        <Button
          onPress={() => {
            setSubmit(text)
            alert("Texto enviado con exito")
          }}
          title="Aceptar"
          color="red"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    backgroundColor: "#eee",
    fontSize: 25,
    color: "red"
  },
  container: {
    flex: 1,//este representa todo ya que es el que envuelve a todo
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView: {
    // width: Dimensions.get("window").width,
    width: "100%"
  }
});
