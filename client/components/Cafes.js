import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CAFES_IN_ZIPS } from "../graphQL/queries";

export default function Cafes({ route, navigation }) {
  const { zipsArray } = route.params;

  const getUsers = ({ zipCode }) => {
    console.log(`find users in zipCode ${zipCode}`)
    navigation.navigate("Users", { zipCode })
  }

  // const pressHandler = ({ id, name, address, url, zipCode }) => {
  //   console.log(id, name, address, url, zipCode);
  //   Alert.alert(
  //     name,
  //     address,
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => Alert.alert("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //     ],
  //     {
  //       cancelable: true,
  //       onDismiss: () =>
  //         Alert.alert("This was dismissed by tapping outside alert dialog"),
  //     }
  //   );
  // };

  const { loading, error, data } = useQuery(GET_CAFES_IN_ZIPS, {
    variables: { zipsArray }
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  // data - nested objects
  let allCafes = [];
  for (let { cafes } of data.zips) {
    allCafes.push(...cafes)
  }
  console.log(allCafes)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafes & Coffee Spots</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={allCafes}
        renderItem={({ item }) => (
          <TouchableOpacity  style={styles.item} onPress={() => getUsers(item)}>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.zipCode}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 30
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "pink",
    fontSize: 16,
  },
});