import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './Home';
import Users from './Users';
import Cafes from './Cafes';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Stack.Screen
        name="Cafes"
        component={Cafes}
        options={{
          tabBarLabel: "Cafes",
        }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: "Users",
        }}
      />
    </Stack.Navigator>
  )
}