import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import SignUp from './SignUp';

export default function Home() {
  return (
    <View>
      <Login />
      <br/>
      <SignUp />
    </View>
  )
}