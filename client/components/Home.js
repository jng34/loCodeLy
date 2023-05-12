import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';

export default function Home() {
  return (
    <View style={styles.container}>
      <Login />
      <br/>
      <SignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
