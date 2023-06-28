import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => { }, [errors]);

  const storeToken = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue);
      console.log('user, ' + value)
    } catch (error) {
      // saving error
      console.log(error)
    }
  };

  async function handleSubmit() {
    // Set graphql auth login
    // Set REST API auth login
    setErrors({});
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/login', {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        }),
        headers: { "Content-Type": "application/json" }
      });
      const userData = await res.json();
      if (userData.errors) {
        setErrors(userData.errors);
      }
      // console.log(userData);
      storeToken(userData)
      if (userData.user) navigation.navigate("UserPage", { userData })
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
        {errors.email ? <Text style={styles.errMsg}>{errors.email}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder='password...'
        />
        {errors.password ? <Text style={styles.errMsg}>{errors.password}</Text> : <></>}
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
  errMsg: {
    color: 'red',
    fontSize: 15
  },
  space: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

