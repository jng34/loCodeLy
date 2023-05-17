import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet, View } from 'react-native';
import Navigator from "./components/Navigator";
import Header from './components/Header';
import Users from './components/Users';
import Cafes from './components/Cafes';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header />
        <Navigator />
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
