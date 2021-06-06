//Detail page for each restaurant

import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreaComponent } from "../../../components/utility/safe-area.component";

//props route comes from restaurnt.nav in order to connect the route with each ResInfoCard
//props is used bc of route.params, pass info when changing routes
export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreackfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurantProps } = route.params;
  return (
    <SafeAreaComponent>
      <RestaurantInfoCard restaurant={restaurantProps} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          //useState
          expanded={breakfastExpanded}
          //inverse
          onPress={() => setBreackfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Ham Sandwitch" />
          <List.Item title="Mushroom Soup" />
          <List.Item title="Burger with Fries" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Grilled Salmon" />
          <List.Item title="Orange Chicken" />
          <List.Item title="Steak" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Sangria" />
          <List.Item title="Coca Cola" />
          <List.Item title="XX" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaComponent>
  );
};
