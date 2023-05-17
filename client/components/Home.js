import { StyleSheet, Button, View } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <br/>
      <Button 
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <br/>
      <Button 
        title="Users"
        onPress={() => navigation.navigate('Users')}
        />
      <br/>
      <Button 
        title="Cafes"
        onPress={() => navigation.navigate('Cafes')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
