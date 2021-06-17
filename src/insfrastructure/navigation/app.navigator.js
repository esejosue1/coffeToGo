//app infrastructure

import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button, SafeAreaView } from "react-native";
import { SafeAreaComponent } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.nav";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

//expo icons
const TAB_ICON = {
  Restaurants: "md-cafe",
  Maps: "md-location-sharp",
  Settings: "md-settings-sharp",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeAreaComponent>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeAreaComponent>
  );
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
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
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
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
