import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { useMutation } from '@apollo/client';
import { SIGN_UP_USER } from '../graphQL/queries';

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
  
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

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
    console.log('Registered user!')
  }


  return (
    <View style={styles.container}>
      <Text>Sign Up Form</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setName(text)} 
        placeholder='Name...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setEmail(text)} 
        placeholder='Email...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setPassword(text)} 
        placeholder='Password...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setConfirmPW(text)} 
        placeholder='Confirm password...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setZipCode(text)} 
        placeholder='Zip Code...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setTechStack(text)} 
        placeholder='Tech Stack...'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={text => setBio(text)} 
        placeholder='Bio...'
      />
      <Button
        title="Sign Up"
        color="#841584"
        onPress={handleSubmit}
      />

      <Text>Already a user?</Text>
      <Button
        title="Login"
        color="orange"
        onPress={() => navigation.navigate('Login')}
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
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  }
});

