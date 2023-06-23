import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import UserPage from './UserPage';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator 
      initialRouteName='SignUp'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="UserPage" component={UserPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

