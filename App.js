import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaComponent } from "./src/components/utility/safe-area.component";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant-screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { LocationContextProvider } from "./src/services/location/location.context";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
// const isAndroid = Platform.OS === 'android';

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //Pages
  const Setting = () => (
    <SafeAreaComponent>
      <Text>Settings page</Text>
    </SafeAreaComponent>
  );
  const Maps = () => (
    <SafeAreaComponent>
      <Text>Maps page</Text>
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
  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "#1E90FF",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Setting} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
