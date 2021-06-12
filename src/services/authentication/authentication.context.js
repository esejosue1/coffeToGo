import React, { useState, createContext } from "react";
import { loginRequest } from "./authenticatoin.service";
import * as firebase from "firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);

  //track user login and its state
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(() => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
