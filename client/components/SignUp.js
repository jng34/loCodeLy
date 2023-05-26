import { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { useMutation } from '@apollo/client';
import { SIGN_UP_USER, GET_SINGLE_USER } from '../graphQL/queries';
import Profile from './Profile';


export default function SignUp({ navigation }) {
  // Form components
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPW, setConfirmPW] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [techStack, setTechStack] = useState('')
  const [bio, setBio] = useState('')

  // GraphQL mutation
  const [addUser, { data, loading, error }] = useMutation(SIGN_UP_USER);
  
  useEffect(() => {
    console.log(data)
    console.log(loading)
    console.log(error)
  }, [data, loading, error])

  const handleSubmit = () => {
    addUser({
      variables: {
        name,
        email,
        password,
        zipCode,
        techStack, 
        bio
      }
    })
    if (data) (() => navigation.navigate('Profile'))()
  }


  return (
    <View style={styles.container}>
      {error ? <Text style={styles.errMsg}>Submission error! {error.message}</Text> : <></>}
      <Text style={styles.header}>Sign Up Form</Text>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setName(text)} 
          placeholder='Name...'
          />
        <Text style={styles.errMsg}></Text>
      </View>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setEmail(text)} 
          placeholder='Email...'
          />
        <Text style={styles.errMsg}></Text>
      </View>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          secureTextEntry={true}
          onChangeText={text => setPassword(text)} 
          placeholder='Password...'
          />
        <Text style={styles.errMsg}></Text>
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
        <Text style={styles.errMsg}></Text>
      </View>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setTechStack(text)} 
          placeholder='Tech Stack...'
          />
        <Text style={styles.errMsg}></Text>
      </View>
      <View style={styles.space}>
        <TextInput 
          style={styles.input} 
          onChangeText={text => setBio(text)} 
          placeholder='Bio...'
          />
        <Text style={styles.errMsg}></Text>
      </View>
      <Button
        title="Sign Up"
        color="#841584"
        onPress={handleSubmit}
        />
      {loading ? <Text>Submitting...</Text> : <></>} 
      <Text style={styles.errMsg}></Text>

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
    fontSize: 20
  },
  space: {
    marginTop: 10,
    marginBottom: 10
  }
});

