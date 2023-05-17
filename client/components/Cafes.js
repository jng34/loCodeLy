import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CAFES } from "../graphQL/queries";

export default function Cafes({ navigation }) {

  const pressHandler = ({ id, name, address, url, zipCode }) => {
    console.log(id, name, address, url, zipCode);
    Alert.alert(
      name,
      address,
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert("This was dismissed by tapping outside alert dialog"),
      }
    );
  };

  const { loading, error, data } = useQuery(GET_CAFES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  console.log(data.cafes)
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={item => item.id}
        data={data.cafes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={styles.item}>{item.name}</Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "pink",
    fontSize: 16,
  },
});