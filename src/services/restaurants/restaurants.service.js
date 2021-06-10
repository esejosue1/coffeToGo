//Connecting our app with the data services

import { mockImages, mocks } from "./mock";
import camelize from "camelize";

//checking if the restaurant exists in the mocks
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("no mocks");
    }
    resolve(mock);
  });
};

//camelize json to prevent data misflow
export const restaurantsTransform = ({ results = [] }) => {
  //map will itirate over every restaurant
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    //shown info from mock data
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
