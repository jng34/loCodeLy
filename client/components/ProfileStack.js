import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import Credentials from './Credentials';
import UserPage from './UserPage';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Credentials'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Credentials" component={Credentials} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  )
}

