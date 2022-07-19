//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>This is my first React Native app!</Text>
      <Text style={styles.testText}>Adding a second child component.</Text>
      <Text>And another one</Text>
      {/* <StatusBar style="auto" /> */}
      <Button title='Tap me!' />
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
  testText: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'blue',
    padding: 16,
  },
});
