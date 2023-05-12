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
    height: 80,
    paddingTop:10, 
    backgroundColor: 'coral'
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  }
});
