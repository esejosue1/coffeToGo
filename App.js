import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant-screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";
// const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
