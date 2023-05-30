import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import Users from "./Users";
import Map from "./Map";
import CredentialsStack from "./CredentialsStack";
import Cafes from "./Cafes";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
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
          component={CredentialsStack}
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