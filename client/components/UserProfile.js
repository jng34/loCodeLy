import { StyleSheet, Button, Text, View } from 'react-native';

export default function UserProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      <View>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <br />
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
  }
});
