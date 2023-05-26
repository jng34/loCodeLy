import { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setEmail(text)} 
        placeholder='email...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setPassword(text)} 
        placeholder='password...'
      />
      <Button
        title="Login"
        color="#841584"
        onPress={() => console.log(email, password)}
      />
      <Button
        title="SignUp"
        color="blue"
        onPress={() => navigation.navigate("SignUp")}
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

