//screen map

import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/searchMap.component";
import { MapCallout } from "../components/map-callout.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

//navigation props is given bc of a view in app nav
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  //var that will determine what zoom level to start with in maps
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((eachRestaurant) => {
          return (
            <MapView.Marker
              key={eachRestaurant.name}
              title={eachRestaurant.name}
              coordinate={{
                latitude: eachRestaurant.geometry.location.lat,
                longitude: eachRestaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    eachRestaurant,
                  })
                }
              >
                <MapCallout restaurant={eachRestaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
