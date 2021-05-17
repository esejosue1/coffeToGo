import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant-screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

