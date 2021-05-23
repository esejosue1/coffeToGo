//obtain the longitude and lattitude of the seached city

import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const locationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      //dont do anything
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      //once finished, run
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      //if error
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  return (
    <locationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </locationContext.Provider>
  );
};
