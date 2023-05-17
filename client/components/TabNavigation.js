import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cafes from "./Cafes";
import Map from "./Map"

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            tabBarLabel: "Users",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cafes"
          component={Cafes}
          options={{
            tabBarLabel: "Cafes",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="coffee" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}