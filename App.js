import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // effect//un efecto es una cosa que no sabemos que resultado tendra
    // return () => {
    //   cleanup
    // }
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <View><Text style={styles.center}>Cargando...</Text></View>
  }
  return (
    <View style={styles.container}>
      {/* <Text>Cargado!!!</Text> */}
      <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.name}     {item.email}</Text>}
        keyExtractor={item => String(item.id)}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,//este representa todo ya que es el que envuelve a todo
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  },
});