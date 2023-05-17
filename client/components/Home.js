import { StyleSheet, Text, Button, View } from 'react-native';
  

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LoCodely</Text>
      <Text style={styles.desc}>meet and code locally</Text>
      <View>
        <Button 
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <br/>
        <Button 
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 10,
    paddingBottom: 30
  }
});
