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
import { GET_USERS_IN_ZIP } from "../graphQL/schema";


export default function Users({ route, navigation }) {
  const { zipCode } = route.params;

  const { loading, error, data } = useQuery(GET_USERS_IN_ZIP, { variables: { zipCode }});
  if (loading) return (<Text>Loading...</Text>);
  if (error) return <Text>`Error! ${error.message}`</Text>;
  
  console.log(data.zip.users)

  const allUsers = data.zip.users;
  // const pressHandler = ({ id, name, email }) => {
  //   console.log(id, name, email)
  //   Alert.alert(
  //     name,
  //     email,
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => Alert.alert('Cancel Pressed'),
  //         style: 'cancel'
  //       }
  //     ],
  //     {
  //       cancelable: true,
  //       onDismiss: () => Alert.alert(
  //         'This was dismissed by tapping outside alert dialog'
  //       )
  //     },
  //   )
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People in zipcode {zipCode}</Text>
      {allUsers.map((user) => (
        <Text key={user.id}>
          {user.name}
        </Text>
      ))}
      {/* <FlatList
        keyExtractor={(item) => item.id}
        data={allUsers}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => console.log(`This is ${item.name}`)}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.techStack}</Text>
            <Text>{item.bio}</Text>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
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
    paddingTop: 20,
    paddingBottom: 20
  },
  item: {
    // marginTop: 24,
    padding: 15,
    backgroundColor: "skyblue",
    fontSize: 15,
  },
});
