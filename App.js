import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {Text} from 'react-native';
import {SafeAreaComponent} from './src/components/utility/safe-area.component';
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant-screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  
  const Setting = () => <SafeAreaComponent><Text>Settings page</Text></SafeAreaComponent>
  const Maps = () => <SafeAreaComponent><Text>Maps page</Text></SafeAreaComponent>
  
  

const Tab = createBottomTabNavigator();

  return (
    <>
   
      <ThemeProvider theme={theme}>
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Settings" component={Setting} />
        
      </Tab.Navigator>
      </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

