import { StyleSheet, Button, Text, View } from "react-native";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign Up form here</Text>
      <Text>Already a user?</Text>
      <Button
        title="Login"
        color="#841584"
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
});

