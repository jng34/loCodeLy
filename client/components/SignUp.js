import { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { useMutation } from '@apollo/client';
import { SIGN_UP_USER } from '../graphQL/mutations';


export default function SignUp({ navigation }) {
  // Form components
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [techStack, setTechStack] = useState('');
  const [bio, setBio] = useState('');
  // Errors state
  const [errors, setErrors] = useState({});
 
  useEffect(()=>{}, [errors]);

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/users/register', {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          zipCode,
          techStack,
          bio
        }),
        headers: { "Content-Type": "application/json" }
      })
      const userData = await res.json();
      if (userData.errors) {
        setErrors(userData.errors);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // GraphQL mutation
  // const [addUser, { data, loading, error }] = useMutation(SIGN_UP_USER);

  // const handleSubmit = () => {
  //   if (error) {
  //     console.log(error)
  //   }
  //   addUser({
  //     variables: {
  //       name,
  //       email,
  //       password,
  //       zipCode,
  //       techStack,
  //       bio
  //     }
  //   })
  //   if (data) (() => navigation.navigate('Profile'))()
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up Form</Text>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          placeholder='Name...'
        />
        {errors.name ? <Text style={styles.errMsg}>{errors.name}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder='Email...'
        />
        {errors.email ? <Text style={styles.errMsg}>{errors.email}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder='Password...'
        />
        {errors.password ? <Text style={styles.errMsg}>{errors.password}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setConfirmPW(text)}
          placeholder='Confirm password...'
        />
        <Text style={styles.errMsg}></Text>
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setZipCode(text)}
          placeholder='Zip Code...'
        />
        {errors.zipCode ? <Text style={styles.errMsg}>{errors.zipCode}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTechStack(text)}
          placeholder='Tech Stack...'
        />
        {errors.techStack ? <Text style={styles.errMsg}>{errors.techStack}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setBio(text)}
          placeholder='Bio...'
        />
        {errors.bio ? <Text style={styles.errMsg}>{errors.bio}</Text> : <></>}
      </View>
      <Button
        title="Sign Up"
        color="#841584"
        onPress={handleSubmit}
      />
      <View style={styles.space}>
        <Text>Already a user?</Text>
        <Button
          title="Login"
          color="orange"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold'
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
    marginTop: 10,
    marginBottom: 10
  }
});

