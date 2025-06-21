import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from './components/Fab';

export default function App() {
  const [contador, setContador] = useState(1)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador mi primer app</Text>
        <Text style={styles.contadorNumber} >{contador}</Text>
        <Fab 
          btnStyle={styles.addButton}
          textStyle={{color:"#fafafa", fontWeight:500}}
          text='Add +'
          onPress={() => setContador(contador +1)}
          onLongPress= {() => setContador(0)}
          />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: "blue",
    position:"absolute",
    top: 50,

  },
  contadorNumber :{
    fontSize:100,
    fontWeight:100,
  },

  addButton: {
    position:"absolute",
    bottom:20,
    right:20,
    backgroundColor: "#65558F",
  }
});
