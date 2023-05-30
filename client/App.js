import 'react-native-gesture-handler'; // NEEDED TO PREVENT APP CRASH
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet, View } from 'react-native';
import TabNavigation from "./components/TabNavigation";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CredentialsStack from './components/Credentials';
import HomeStack from './components/HomeStack';
import Cafes from './components/Cafes';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Cafes />
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
