import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { LocationContextProvider } from "./src/services/location/location.context";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/insfrastructure/navigation/index";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
// const isAndroid = Platform.OS === 'android';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6nZLg0K1wGy9v8sodUIeDS33b4aCANv8",
  authDomain: "meals-to-go-3974d.firebaseapp.com",
  projectId: "meals-to-go-3974d",
  storageBucket: "meals-to-go-3974d.appspot.com",
  messagingSenderId: "699154149080",
  appId: "1:699154149080:web:e2df2dabc3d077c05bb1ad",
};

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
