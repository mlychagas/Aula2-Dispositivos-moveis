import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactBotao from './components/ReactBotao';
import Contador from './components/Contador';
import Saudacao from './components/Saudacao';
import Espelhamento from './components/Espelhamento';


export default function App() {
  return (
    <View style={styles.container}>
      <Espelhamento placeholder="Digite algo ..."/>
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
});
