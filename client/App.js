import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet, View } from 'react-native';
import Navigator from "./components/Navigator";
import Header from './components/Header';
import Cafes from "./components/Cafes";
import Users from "./components/Users";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});


// client
//   .query({
//     query: gql`
//       query GetUsers {
//         users {
//           id
//           name
//           email
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));


export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Header />
      </View>
      <View>
        {/* <Navigator /> */}
        {/* <Cafes /> */}
        <Users/>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
