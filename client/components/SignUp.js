import { useState } from 'react';
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
 
  // Errors
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [zipCodeErr, setZipCodeErr] = useState('');
  const [techStackErr, setTechStackErr] = useState('');
  const [bioErr, setBioErr] = useState('');
 

  // GraphQL mutation
  const [addUser, { data, loading, error }] = useMutation(SIGN_UP_USER);

  const handleSubmit = async () => {
    // fetch("http:localhost:3000/api/v1/users/register")
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
        const { name, email, password, techStack, bio, zipCode } = userData.errors;
        setNameErr(name);
        setEmailErr(email);
        setPasswordErr(password);
        setZipCodeErr(zipCode);
        setTechStackErr(techStack);
        setBioErr(bio);
      }
    } catch (err) {
      console.log(err)
    }
  }
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
      {error ? <Text style={styles.errMsg}>Submission error! {error.message}</Text> : <></>}
      <Text style={styles.header}>Sign Up Form</Text>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          placeholder='Name...'
        />
        {nameErr ? <Text style={styles.errMsg}>{nameErr}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder='Email...'
        />
        {emailErr ? <Text style={styles.errMsg}>{emailErr}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder='Password...'
        />
        {passwordErr ? <Text style={styles.errMsg}>{passwordErr}</Text> : <></>}
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
        {zipCodeErr ? <Text style={styles.errMsg}>{zipCodeErr}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTechStack(text)}
          placeholder='Tech Stack...'
        />
        {techStackErr ? <Text style={styles.errMsg}>{techStackErr}</Text> : <></>}
      </View>
      <View style={styles.space}>
        <TextInput
          style={styles.input}
          onChangeText={text => setBio(text)}
          placeholder='Bio...'
        />
         {bioErr ? <Text style={styles.errMsg}>{bioErr}</Text> : <></>}
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
    fontSize: 15
  },
  space: {
    marginTop: 10,
    marginBottom: 10
  }
});

