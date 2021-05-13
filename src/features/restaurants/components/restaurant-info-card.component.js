import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    address = "100 some address stree",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.imageCover}
        source={{ uri: photos[0] }}
      />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  imageCover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 10,
    fontSize: 30,
  },
});
