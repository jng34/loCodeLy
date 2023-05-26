import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    // Set graphql auth login
    console.log(`logged in with email: ${email} and password: ${password}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setEmail(text)} 
          placeholder='email...'
        />
      </View>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setPassword(text)} 
          placeholder='password...'
        />
      </View>
      <Button
        title="Login"
        color="#841584"
        onPress={handleSubmit}
      />
      <Text style={styles.space}>Not a user? Sign up now</Text>
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
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    marginBottom: 15
  },
  space: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

