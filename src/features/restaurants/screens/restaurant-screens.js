//restaurant main page

import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;





export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
    data={[{name: 1},{name:2},{name:3},{name:4}]}
    renderItem = {() => <RestaurantInfoCard /> }
    keyExtractor = {(item) => item.name}
    contentContainerStyle = {{padding:16}}

    />
    
    
  </SafeArea>
);
