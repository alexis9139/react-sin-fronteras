import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//conf FlatList os permite redactar listas dentro de la app
export default function App() {




  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", name: "alexis" },
          { key: "2", name: "bruno" },
          { key: "3", name: "baloy" },
          { key: "4", name: "medrano" },
          { key: "5", name: "tania" },
          { key: "6", name: "emilse" },
          { key: "7", name: "alexis" },
          { key: "8", name: "bruno" },
          { key: "9", name: "baloy" },
          { key: "10", name: "medrano" },
          { key: "11", name: "tania" },
          { key: "12", name: "emilse" },
          { key: "13", name: "alexis" },
          { key: "14", name: "bruno" },
          { key: "15", name: "baloy" },
          { key: "16", name: "medrano" },
          { key: "17", name: "tania" },
          { key: "18", name: "emilse" },
          { key: "19", name: "alexis" },
          { key: "20", name: "bruno" },
          { key: "21", name: "baloy" },
          { key: "22", name: "medrano" },
          { key: "23", name: "tania" },
          { key: "24", name: "emilse" },
        ]}//arreglo
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}//explica como se renderizara el contenido de los datos que le pasemos en data
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//este representa todo ya que es el que envuelve a todo
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  }
});