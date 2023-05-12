import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to LoCodely</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    justifyContent: 'center',
    height: 50,
    paddingTop:10, 
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  }
});
