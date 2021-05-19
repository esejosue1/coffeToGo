//restaurant main page

import React, {useContext} from "react";
import { Searchbar } from "react-native-paper";
import {  FlatList} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import {SafeAreaComponent} from '../../../components/utility/safe-area.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  },
})``;



export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext)
  console.log(restaurantContext)
  return(

  
  <SafeAreaComponent>
   
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
    data={restaurantContext.restaurants}
    renderItem = {() => 
    <Spacer position="bottom" size="large">
    <RestaurantInfoCard />
    </Spacer> }
    keyExtractor = {(item) => item.name}

    />

  </SafeAreaComponent>
  )
};
