import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeAreaComponent } from "../../../components/utility/safe-area.component";
import { Text, Button } from "react-native";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeAreaComponent>

    </SafeAreaComponent>
  );
};
