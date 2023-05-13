import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet, View } from 'react-native';
import Navigator from "./components/Navigator";
import Header from './components/Header';
import Cafes from "./components/Cafes";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header />
        {/* <View style={styles.navigator}> */}
        <Navigator />
        {/* <Cafes/> */}
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
  navigator: {
    flex: 2
  },
});
