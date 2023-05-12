import { StyleSheet, Button, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Button
        title="SignUp"
        color="#841584"
        onPress={() => console.log('signed up!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'blue'
  }
});

