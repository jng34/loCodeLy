import { StyleSheet, Button, Text, View } from 'react-native';

export default function UserPage({ route }) {
  const { name, token, email, zipCode, techStack, bio } = route.params.userData;

  return (
    <View style={styles.container}>
      <Text>{name} has logged in</Text>
      <Text>{email}</Text>
      <Text>{zipCode}</Text>
      <Text>{techStack}</Text>
      <Text>{bio}</Text>
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
