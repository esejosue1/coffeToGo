//app infrastructure

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeAreaComponent } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.nav";
import { MapScreen } from "../../features/map/screens/map.screen";
const Tab = createBottomTabNavigator();

//Pages
const Settings = () => (
  <SafeAreaComponent>
    <Text>Settings page</Text>
  </SafeAreaComponent>
);

//expo icons
const TAB_ICON = {
  Restaurants: "md-cafe",
  Maps: "md-location-sharp",
  Settings: "md-settings-sharp",
};

//cresting the logic for the screen options for the navbar
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#1E90FF",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Maps" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
