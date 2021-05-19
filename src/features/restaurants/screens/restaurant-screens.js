//restaurant main page

import React from "react";
import { Searchbar } from "react-native-paper";
import {  FlatList} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import {SafeAreaComponent} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacer/spacer.component';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  },
})``;



export const RestaurantScreen = () => (
  <SafeAreaComponent>
   
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
    data={[{name: 1},{name:2},{name:3},{name:4}]}
    renderItem = {() => 
    <Spacer position="bottom" size="large">
    <RestaurantInfoCard />
    </Spacer> }
    keyExtractor = {(item) => item.name}

    />

  </SafeAreaComponent>
);
