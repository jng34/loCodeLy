import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    // Set graphql auth login
    console.log(`logged in with email: ${email} and password: ${password}`)
    // Set REST API auth login
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/login', {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
        headers: { "Content-Type": "application/json"}
      });
      const userData = await res.json();
      if (userData.errors) {
        console.log(userData.errors)
      }
      console.log(userData)
    } catch (error) {
      console.log(error)
    }
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
          secureTextEntry={true}
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
  space: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

