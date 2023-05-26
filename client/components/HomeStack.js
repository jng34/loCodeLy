import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Cafes from "./Cafes";
import Map from "./Map";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cafes" component={Cafes}/>
      <Stack.Screen name="Map" component={Map}/>
    </Stack.Navigator>
  )
}