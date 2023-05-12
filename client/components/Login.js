import { useState } from 'react';
import { StyleSheet, Alert, TextInput, Button, View } from "react-native";

export default function Login() {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setName(text)} 
        placeholder='e.g. John...'
      />
      <Button
        title="Login"
        color="#841584"
        onPress={() => console.log(name)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderWidth: 2,
  },
});

