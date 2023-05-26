import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function CredentialsStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Credentials'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

