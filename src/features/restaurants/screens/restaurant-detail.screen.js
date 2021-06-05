//Detail page for each restaurant

import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaComponent } from "../../../components/utility/safe-area.component";

//props route comes from restaurnt.nav in order to connect the route with each ResInfoCard
//props is used bc of route.params, pass info when changing routes
export const RestaurantDetailScreen = ({ route }) => {
  const { restaurantProps } = route.params;
  return (
    <SafeAreaComponent>
      <RestaurantInfoCard restaurant={restaurantProps} />
    </SafeAreaComponent>
  );
};
