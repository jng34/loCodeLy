import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "./Home";
import Users from "./Users";
import AllCafes from "./AllCafes";
import Map from "./Map";
import CredentialsStack from "./CredentialsStack";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
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
          name="All Cafes"
          component={AllCafes}
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