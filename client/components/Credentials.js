import { StyleSheet, Button, Text, View } from 'react-native';

export default function Credentials({ navigation }) {
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
    marginTop: 10,
    marginBottom: 10
  }
});
