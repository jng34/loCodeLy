import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Header from './components/Header';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});


client
  .query({
    query: gql`
      query GetUsers {
        users {
          id
          name
          email
        }
      }
    `,
  })
  .then((result) => console.log(result));

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
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
