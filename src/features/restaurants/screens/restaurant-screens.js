//restaurant main page

import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeAreaComponent } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeAreaComponent>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaComponent>
  );
};
