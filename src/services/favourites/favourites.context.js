//favourites functionality

import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  //save favourites restaurant in local phone storage
  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value, uid);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error saving ", e);
    }
  };

  //load favourites restaurant in local phone storage
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading ", e);
    }
  };

  //add to fav
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  //remove from fav, if repitition, dont add restaurant
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  //load fav on every mount when we have a user logged in
  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  //listen to any change in fav, store fav depending on the user
  useEffect(() => {
    if(user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
