//Compact view for each restaurant pinpoint in map screen

import React from "react";
import styled from "styled-components";
import { CompactResraurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => (
  <CompactResraurantInfo restaurant={restaurant} />
);
