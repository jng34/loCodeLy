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
    height: 50,
    paddingTop: 30, 
    paddingBottom: 30, 
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold'
  }
});
