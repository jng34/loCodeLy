import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setName(text)} 
        placeholder='e.g. John...'
      />
      <br/>
      <Button
        title="Login"
        color="#841584"
        onPress={() => console.log(name)}
      />
      <br/>
      <Button
        title="Go Back"
        color="blue"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    borderWidth: 2,
  },
  button: {
    marginTop: 15,
    marginBottom: 15
  }
});

