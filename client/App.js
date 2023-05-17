import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet, View } from 'react-native';
import Navigation from "./components/TabNavigation";


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Navigation />
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
