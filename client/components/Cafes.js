import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CAFES } from "../queries/queries";

export default function Cafes({ navigation }) {
  const { loading, error, data } = useQuery(GET_CAFES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  console.log(data.cafes)
  return (
    <View>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={data.cafes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10
,    padding: 15,
    backgroundColor: 'pink',
    fontSize: 16
  }
})