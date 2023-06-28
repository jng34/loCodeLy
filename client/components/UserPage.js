import { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';

export default function UserPage({ navigation, route }) {
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log(JSON.parse(jsonValue))
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      // error reading value
      console.log(error)
    }
  };

  useEffect(() => {
    getData().then(user => setUserData(user))
  }, [])
  console.log(userData)
  

  const handleLogOut = () => {
    const removeValue = async () => {
      try {
        await AsyncStorage.removeItem('user')
      } catch(error) {
        // remove error
        console.log(error)
      }
      console.log('Done.')
    }
    removeValue();
    setUserData({});
    navigation.navigate('Login');
  }


  if (userData.token) { 
    const { name, email, zipCode, techStack, bio } = userData.user; 
    // const { name, email, zipCode, techStack, bio } = route.params.userData.user; 
    return (
      <View style={styles.container}>
        <Text>{name} has logged in</Text>
        <Text>{email}</Text>
        <Text>{zipCode}</Text>
        <Text>{techStack}</Text>
        <Text>{bio}</Text>
        <Button
          title="LOGOUT"
          color="#841584"
          onPress={handleLogOut}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      <View style={styles.button}> 
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={styles.button}>
        <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
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
  button: {
    paddingTop: 10,
    paddingBottom: 10
  }
});
