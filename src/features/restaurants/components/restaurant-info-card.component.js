//information of each restaurant in cards

import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  Address,
} from "../components/restaurant-info-card.styles";

//restaurant info that each card will have
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    address = "100 some address stree",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = true,
  } = restaurant;

  //creating an array of stars with the star.svg
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
