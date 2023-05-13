import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/queries";


export default function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return (<Text>Loading...</Text>);
  if (error) return <Text>`Error! ${error.message}`</Text>;
  
  const pressHandler = ({ id, name, email }) => {
    console.log(id, name, email)
    Alert.alert(
      name,
      email,
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert(
          'This was dismissed by tapping outside alert dialog'
        )
      },
    )
   };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 15,
    backgroundColor: "yellow",
    fontSize: 16,
  },
});
