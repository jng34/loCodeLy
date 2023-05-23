import { StyleSheet, Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';


function UserProfile({ navigation }) {
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

const Stack = createNativeStackNavigator();

export default function UserProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={UserProfile}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
    </Stack.Navigator>
  )
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
